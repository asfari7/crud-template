import { useCallback, useEffect, useRef, useState } from "react"

type UseFecthConfig<T> = {
  initialData?: T | null
  skip?: boolean
  responseType?: "json" | "text" | "blob"
  // dependencies that trigger refetch when changed
  deps?: any[]
}

type UseFecthResult<T> = {
  data: T | null
  error: Error | null
  loading: boolean
  refetch: () => Promise<void>
  abort: () => void
}

/**
 * Custom hook untuk fetch data.
 * - generic T untuk tipe data response
 * - jika url === null atau config.skip === true, fetch tidak dijalankan
 */
export default function useFecth<T = unknown>(
  input: string | Request | null,
  options?: RequestInit,
  config: UseFecthConfig<T> = {}
): UseFecthResult<T> {
  const {
    initialData = null,
    skip = false,
    responseType = "json",
    deps = [],
  } = config

  const [data, setData] = useState<T | null>(initialData)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const controllerRef = useRef<AbortController | null>(null)
  const fetchIdRef = useRef(0)

  const abort = useCallback(() => {
    controllerRef.current?.abort()
    controllerRef.current = null
  }, [])

  const doFetch = useCallback(async () => {
    if (!input || skip) return
    const fetchId = ++fetchIdRef.current

    abort() // abort previous if any
    const controller = new AbortController()
    controllerRef.current = controller

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(input, {
        signal: controller.signal,
        ...(options || {}),
      })

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }

      let parsed: any
      if (responseType === "json") parsed = await res.json()
      else if (responseType === "text") parsed = await res.text()
      else parsed = await res.blob()

      // ignore out-of-order responses
      if (fetchId === fetchIdRef.current) {
        setData(parsed as T)
      }
    } catch (err: any) {
      if (err.name === "AbortError") {
        // aborted, do nothing
      } else {
        if (fetchId === fetchIdRef.current) setError(err)
      }
    } finally {
      if (fetchId === fetchIdRef.current) setLoading(false)
    }
  }, [input, JSON.stringify(options || {}), skip, responseType, abort, ...deps])

  // auto fetch on mount / deps change
  useEffect(() => {
    doFetch()
    return () => abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doFetch])

  const refetch = useCallback(async () => {
    await doFetch()
  }, [doFetch])

  return { data, error, loading, refetch, abort }
}

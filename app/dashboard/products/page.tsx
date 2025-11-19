import Link from "next/link"

const product = "await getProduct();"

export default function page() {
  return (
    <section>
      <h2>List Products Page</h2>
      <div>
        {/* Example product link */}
        <Link href={`/dashboard/products/${product}`}>Product 1</Link>
      </div>
    </section>
  )
}

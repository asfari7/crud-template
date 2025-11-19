import { PaginationProduct } from "@/components/pagination"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const product = "await getProduct();"

export default function page() {
  return (
    <section>
      <div className='mb-4'>
        <h2 className='text-2xl mt-2 mb-4 font-semibold'>Data Produk</h2>
        <Link href='/dashboard/products/create'>
          <Button className='cursor-pointer'>Tambah</Button>
        </Link>
      </div>
      <div className='bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min'>
        <div className='grid gap-2 auto-rows-min grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <Link href={`/dashboard/products/${product}`}>
            <div className='p-2 border-2 rounded-lg'>
              <div className='bg-blue-400 aspect-square rounded-lg'>
                {/* Gambar produk */}
              </div>
              <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
              <p className='text-lg font-semibold'>Rp 100.000</p>
            </div>
          </Link>
          <div className='p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
          <div className='p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
          <div className='p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
        </div>
        <div className='my-4'>
          <PaginationProduct />
        </div>
      </div>
    </section>
  )
}

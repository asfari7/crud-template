import { Button } from "@/components/ui/button"
import Link from "next/link"
import ListProduct from "@/components/list-product"

export default function page() {
  return (
    <section>
      <div className='mb-4'>
        <h2 className='text-2xl mt-2 mb-4 font-semibold'>Data Produk</h2>
        <Link href='/dashboard/products/create'>
          <Button className='cursor-pointer'>Tambah</Button>
        </Link>
      </div>
      <ListProduct />
    </section>
  )
}

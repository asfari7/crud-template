import { Button } from "@/components/ui/button"

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = "await getProductById(id);"

  return (
    <div>
      <h2 className='text-2xl mt-2 mb-4 font-semibold'>Detail Produk</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        <div className='bg-neutral-200 aspect-square rounded-lg'></div>
        <div className='flex flex-col gap-2'>
          <label className='font-medium' htmlFor='product-price'>
            Harga Produk
          </label>
          <input
            className='p-2 border rounded-lg'
            type='number'
            id='product-price'
            placeholder='Masukkan harga produk'
          />{" "}
          <label className='font-medium' htmlFor='product-price'>
            Harga Produk
          </label>
          <input
            className='p-2 border rounded-lg'
            type='number'
            id='product-price'
            placeholder='Masukkan harga produk'
          />
        </div>
        <div className='flex flex-col gap-2 '>
          <label className='font-medium' htmlFor='product-description'>
            Deskripsi Produk
          </label>
          <textarea
            className='p-2 border rounded-lg'
            id='product-description'
            placeholder='Masukkan deskripsi produk'
          />
          <Button className='text-white py-2 px-4 rounded-lg transition-colors cursor-pointer'>
            Simpan
          </Button>
          <Button
            variant={"destructive"}
            className='text-white py-2 px-4 rounded-lg transition-colors cursor-pointer'
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

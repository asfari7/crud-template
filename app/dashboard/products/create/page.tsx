import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <>
      <h2 className='text-2xl mt-2 mb-4 font-semibold'>Tambah Produk</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <label className='font-medium' htmlFor='product-name'>
            Nama Produk
          </label>
          <input
            className='p-2 border rounded-lg'
            type='text'
            id='product-name'
            placeholder='Masukkan nama produk'
          />
        </div>
        <div className='flex flex-col gap-2'>
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
        <div className='flex flex-col gap-2 md:col-span-2'>
          <label className='font-medium' htmlFor='product-description'>
            Deskripsi Produk
          </label>
          <textarea
            className='p-2 border rounded-lg'
            id='product-description'
            placeholder='Masukkan deskripsi produk'
          />
        </div>
        <Button className='text-white py-2 px-4 rounded-lg transition-colors cursor-pointer'>
          Simpan Produk
        </Button>
      </div>
    </>
  )
}

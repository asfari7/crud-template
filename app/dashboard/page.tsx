export default function Page() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4'>
      <div className='grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-3'>
        <div className='flex bg-muted aspect-video rounded-xl h-fit p-2'>
          <div className='w-full flex flex-col p-2'>
            <h3 className='text-sm lg:text-xl font-medium'>Total Product</h3>
            <p className='text-xl lg:text-3xl font-semibold'>1,234</p>
          </div>
        </div>
        <div className='flex bg-muted aspect-video rounded-xl h-fit p-2'>
          <div className='w-full flex flex-col p-2'>
            <h3 className='text-sm lg:text-xl font-medium'>Total Product</h3>
            <p className='text-xl lg:text-3xl font-semibold'>1,234</p>
          </div>
        </div>
        <div className='flex bg-muted aspect-video rounded-xl h-fit p-2'>
          <div className='w-full flex flex-col p-2'>
            <h3 className='text-sm lg:text-xl font-medium'>Total Product</h3>
            <p className='text-xl lg:text-3xl font-semibold'>1,234</p>
          </div>
        </div>
      </div>
      <h2 className='text-lg font-medium'>Data Produk Terbaru</h2>
      <div className='bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min'>
        <div className='grid auto-rows-min grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='m-2 p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
          <div className='m-2 p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
          <div className='m-2 p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>{" "}
          <div className='m-2 p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>{" "}
          <div className='m-2 p-2 border-2 rounded-lg'>
            <div className='bg-blue-400 aspect-square rounded-lg'>
              {/* Gambar produk */}
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

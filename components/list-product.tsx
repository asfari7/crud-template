"use client"

import React from "react"
import { PaginationProduct } from "./pagination"
import Link from "next/link"

const product = "produk-a"

export default function ListProduct({}: React.ComponentProps<"div">) {
  return (
    <div className='min-h-screen flex-1 rounded-xl md:min-h-min'>
      <div className='grid gap-2 auto-rows-min grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Link href={`/dashboard/products/${product}`}>
          <div className='p-2 border-2 rounded-lg'>
            <div className='aspect-square rounded-lg'>
              <img src='dummy' alt='img-product' />
            </div>
            <h3 className='my-2 text-sm md:text-md font-medium'>Produk A</h3>
            <p className='text-lg font-semibold'>Rp 100.000</p>
          </div>
        </Link>
      </div>
      <div className='my-6'>
        <PaginationProduct />
      </div>
    </div>
  )
}

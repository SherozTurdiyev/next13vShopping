import { ProductType } from '@/interface'
import Image from 'next/image'
import React, { FC } from 'react'
import CustumImage from '../CustomImage'

const Product: FC<{ productDetail: ProductType }> = ({ productDetail }) => {
    return (
        <div className="bg-white p-6 rounded-2xl h-96 flex flex-col group hover:scale-105 transition-transform ease-out duration-200 border">
            <div className='relative min-h-72 flex-1'>
                <CustumImage product={productDetail} />
            </div>
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{productDetail.category}</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex font-semibold">
                <p className='w-2/3 truncate '>{productDetail.title}</p>
                <p className='w-1/3 truncate text-end'>{productDetail.price}</p>
            </h2>
            <p className="leading-relaxed text-base line-clamp-2">{productDetail.description}</p>
        </div>
    )
}

export default Product

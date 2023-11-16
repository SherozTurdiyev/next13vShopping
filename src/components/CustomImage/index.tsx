"use client"
import { ProductType } from '@/interface'
import Image from 'next/image'
import React, { FC, useState } from 'react'
interface Props {
    product: ProductType,
}

const CustumImage: FC<Props> = ({ product }) => {
    const [isLoading, setLoading] = useState(true)
    return (
        <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"}`}
            onLoadingComplete={() => { setLoading(false) }}
        />
    )
}

export default CustumImage

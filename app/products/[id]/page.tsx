"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getProductData(id: number) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
}

export default function Page() {
    const { id } = useParams();

    const [product, setProduct] = useState<any>(undefined);

    useEffect(() => {
        getProductData(Number(id)).then(data => {
            setProduct(data);
        });
    }, []);

    if (product === undefined) {
        return <div>Loading product...</div>
    }

    return (
        <div className='flex flex-col gap-1'>
            <div>Product: {product.title}</div>
            <div>Description: {product.description}</div>
            <div>Price: ${product.price.toFixed(2)}</div>
        </div>
    )
}

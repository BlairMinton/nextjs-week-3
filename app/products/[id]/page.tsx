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
        
        <div>
            <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            </div>
            
            <div>
                <div className='flex flex-col gap-2 text-white mb-6 w-128'>{product.description}</div>
            </div>

            <div className='flex gap-4'>
                <div className='flex flex-col gap-2 text-white w-64'>
                    <div>Category: {product.category}</div>
                    <div>Price: ${product.price.toFixed(2)}</div>
                    <div>Discount: {product.discountPercentage}%</div>
                    <div>Rating: {product.rating}</div>
                    <div>Stock: {product.stock}</div>
                    <div>Tags: {product.tags.join(", ")}</div>
                </div>

                <div>
                    <div className='flex gap-2 ml-4 pb-10'>
                        {product.images.map((img: string, index: number) => (
                            <img key={index} src={img} alt={`${product.title} ${index + 1}`} className='w-64 h-64 object-cover' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getQuoteData(id: number) {
    const response = await fetch(`https://dummyjson.com/quotes/${id}`);
    const data = await response.json();
    return data;
}

export default function Page() {
    const { id } = useParams();

    const [quote, setQuote] = useState<any>(undefined);

    useEffect(() => {
        getQuoteData(Number(id)).then(data => {
            setQuote(data);
        });
    }, []);

    if (quote === undefined) {
        return <div>Loading quote...</div>
    }

    return (
        <div className='flex flex-col gap-1'>
            <div>ID: {quote.id}</div>
            <div>Quote: {quote.quote}</div>
            <div>Author: {quote.author}</div>
        </div>
    )
}

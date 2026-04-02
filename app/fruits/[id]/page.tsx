"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getFruitData(id: number) {
    const response = await fetch(`https://ufdybbtgdwaimolwqtkw.supabase.co/rest/v1/Fruits?id=eq.${id}`, {
        headers: {
            "apikey": "sb_publishable_IbQL2bfKtJzm7_6RIjFNhA_1QZOJY1h"
        }
    });
    const data = await response.json();
    console.log(data);
    return data[0];
}

export default function Page() {
    const { id } = useParams();

    const [fruit, setFruit] = useState<any>(undefined);

    useEffect(() => {
        getFruitData(Number(id)).then(data => {
            setFruit(data);
        });
    }, []);

    if (fruit === undefined) {
        return <div>Loading fruit...</div>
    }

    return (
        <div>
            <div>Fruit: {fruit.name}</div>
            <div>Color: {fruit.colour}</div>
            <div>Weight: {fruit.weight}</div>
        </div>
    )
}

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getCommentData(id: number) {
    const response = await fetch(`https://dummyjson.com/comments/${id}`);
    const data = await response.json();
    return data;
}

export default function Page() {
    const { id } = useParams();

    const [comment, setComment] = useState<any>(undefined);

    useEffect(() => {
        getCommentData(Number(id)).then(data => {
            setComment(data);
        });
    }, []);

    if (comment === undefined) {
        return <div>Loading comment...</div>
    }

    return (
        <div className='flex flex-col gap-1'>
            <div>ID: {comment.id}</div>
            <div>Comment: {comment.body}</div>
            <div>Likes: {comment.likes}</div>
        </div>
    )
}

// Marks this component as a Client Component so React hooks can be used
"use client";

// Hook to access dynamic route parameters (e.g. the id in /recipes/[id])
import { useParams } from "next/navigation"; 

// React hooks for managing state and side effects
import { useEffect, useState } from "react";

// Function that fetches recipe data from the DummyJSON API using the provided ID
async function getRecipeData(id: number) {
    // Send a request to the API for a specific recipe
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);

    // Convert the response into JSON format
    const data = await response.json();

    // Return the recipe data
    return data;
}

export default function Page() {
    // Get the dynamic route parameter from the URL (e.g. /recipes/3 → id = 3)
    const { id } = useParams();

    // Create a state variable to store the recipe data once it is fetched
    const [recipe, setRecipe] = useState<any>(undefined);

    // useEffect runs after the component first loads
    useEffect(() => {
        // Call the function to fetch recipe data using the route ID
        getRecipeData(Number(id)).then(data => {
            // Save the fetched data into state
            setRecipe(data);
        });
    }, []);

    // While the data is still loading, show a loading message
    if (recipe === undefined) {
        return <div>Loading recipe..</div>
    }

    // Once the data has loaded, display some recipe information
    return (
        <div className="flex flex-col gap-1">
            {/* Display the recipe name */}
            <div>Name: {recipe.name}</div>

            {/* Display the difficulty level of the recipe */}
            <div>Difficulty: {recipe.difficulty}</div>

            {/* Display how many servings the recipe makes */}
            <div>Servings: {recipe.servings}</div>
        </div>
    )
}
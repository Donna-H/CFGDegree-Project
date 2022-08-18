import React, {useState, useEffect} from 'react';

export default function Meal({meal}){
    const[imageUrl, setImageUrl] = useState('');

    useEffect(() =>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=abd86c2a4b44488a9e0109ebdab77a24&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("There is an error");
          });
         }, [meal.id]);


    return (
        <article>
            <h1 className="recipe"> {meal.title} </h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings} servings </li>
            </ul>
            <div className="recipe-button">
            <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">Go to Recipe</a>
            </div>
        </article>
    )
}
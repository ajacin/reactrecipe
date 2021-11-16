import React from 'react'
import RecipeStyles from './styles/Recipe.module.css'
export default function Recipe({ title, image, meta}) {
    return (

        <div className={RecipeStyles.recipe}>
            <img className={RecipeStyles.productImage} src={image} alt="recipeimage"></img>
            <h2>{title}</h2>
            <button className={RecipeStyles.viewButton}>View this item</button>
            <ul className={RecipeStyles.quickinfo}>
            <li>{meta.calories} calories</li>
            <li>{meta.mealType}</li>
            <li>{meta.dishType}</li>
            </ul>
            
            
        </div>
    )
}

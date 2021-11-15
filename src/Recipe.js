import React from 'react'

export default function Recipe({title,image}) {
    return (
        <div className="currency">
        <h3>{title}</h3>
        <img src={image} alt="recipeimage"></img>
        </div>
    )
}

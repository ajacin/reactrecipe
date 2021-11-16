import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { Sample } from './sampleresponse';

const App = () => {
  const APPID = "8fbdabe1";
  const APPKEY = "ea790b6652deb228b7e43f8868a3be87";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('Chicken');
  const [query, setQuery] = useState('');
  const [resulthelptext, setResulthelptext] = useState('');

  useEffect(() => {
    fetchRecipes();
    //temp for testing
    // setRecipes(Sample.hits)


  }, [query]);


  const fetchRecipes = async () => {

    const REQUEST = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8fbdabe1&app_key=ea790b6652deb228b7e43f8868a3be87&ingr=3-6&diet=balanced&health=alcohol-free&cuisineType=American&mealType=Breakfast&dishType=Bread&calories=100-300&excluded=peanut`
    const result = await fetch(REQUEST);
    const json = await result.json();
    setRecipes(json.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const submitForm = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setResulthelptext({ search } === '' ? '' : `Showing results for ${search} recipes`)
  }

  return (
    <div className="app">
      <header>
        <div className="logo-container">
          <div className="logo-image">
            <img src="https://avatars.githubusercontent.com/u/7235523?v=4" alt="logo"></img>
          </div>
          <h3 className="logo-name">food database</h3>
        </div>
        <nav>
          <ul className="nav-links">
            <li ><a href="#" class="nav-link selected-nav-item">Recipes</a></li>
            <li ><a href="#" class="nav-link">Nutrients</a></li>
            <li ><a href="#" class="nav-link">Food</a></li>
            <li ><a href="#" class="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div className="how-to">
          <h3>{resulthelptext}</h3>
        </div>
        <div className="nav-button">
          <img src="./images/menu.svg" alt="menu"></img>
        </div>
      </header>
      <form onSubmit={submitForm} className="search-form">
        <input className="search-input" value={search} onChange={updateSearch} ></input>
        <button className="search-button"><p>Search</p></button>
      </form>
      {(recipes.length > 0) ? (<div className="recipeContainer">
        {recipes.map((recipelistitem, index) => (
          <Recipe title={recipelistitem.recipe.label} image={recipelistitem.recipe.image} key={index} meta={recipelistitem.recipe}></Recipe>
        ))}
      </div>) : <h4>No results matching your search</h4>}


    </div>
  )
}

export default App;
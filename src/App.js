import React, {useEffect,useState} from 'react';
import Recipe from './Recipe';
import sample from './sampleresponse';

const App = ()=> {
  const APPID ="8fbdabe1";
  const APPKEY="ea790b6652deb228b7e43f8868a3be87";
  

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('Chicken');
  const [query,setQuery] = useState('');

  useEffect(()=>{
    // fetchRecipes();
    //temp for testing
    

  },[query]);


  const fetchRecipes = async () => {

    const REQUEST =`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8fbdabe1&app_key=ea790b6652deb228b7e43f8868a3be87&ingr=3-6&diet=balanced&health=alcohol-free&cuisineType=American&mealType=Breakfast&dishType=Bread&calories=100-300&excluded=peanut`
    const result = await  fetch(REQUEST);
    const json  = await result.json();
    setRecipes(json.hits); 
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const submitForm = e => {
  e.preventDefault();
  setQuery(search);
  }

  return (
    <div className="app">
      <form onSubmit = {submitForm} className="search-form">
        <input className="search-input" value={search} onChange={updateSearch} ></input>
        <button className="search-button">Search Recipes</button>
      </form>
      {recipes.map((recipelistitem,index)=>(
        <Recipe title={recipelistitem.recipe.label} image={recipelistitem.recipe.image} key={index}></Recipe>
      ))}
      
    </div>
  )
}

export default App;
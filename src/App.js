import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = '1ce6f996';
    const APP_KEY = '35d74ed6d1c8fbeed53f81be92961aa9';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        
    };

    return (
        <div className='App'>
            <form className='search-form'>
                <input className='search-bar' type='text'/>
                <button className='search-button' type='submit'>Search</button>
            </form>
            {recipes.map(recipe => (
                <Recipe key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                />
            ))}
        </div>
    )
};

export default App;

import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'
const Restaurant = () => {
   const [searchText, setSearchText] = useState('');

   useEffect( () => {
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
            fetch(url)
            .then()
    }, [])

    const handleSearchText = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
        console.log(searchTextValue);
    }
    return (
        <div className='container'>
           <input onChange={handleSearchText} placeholder="Search meal here" type="text" />
        </div>
    );
};

export default Restaurant;
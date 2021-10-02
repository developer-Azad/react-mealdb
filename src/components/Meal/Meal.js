import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {strMeal, strMealThumb, strInstructions, } = props.meal;
    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h5>{strInstructions.slice(0, 200)}</h5>
        </div>
    );
};

export default Meal;
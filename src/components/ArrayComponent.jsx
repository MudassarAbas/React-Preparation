import { element } from 'prop-types';
import React, {useState} from 'react'

function ArrayComponent(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Mangoes"]);

    function handleAddFood(){
       const newFood = document.getElementById("foodinput").value;
       document.getElementById("foodinput").value = "";

       setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((element, i) => i !== index));

    }



    return(<div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>

            <input type='text' id='foodinput' placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
           </div>)
}
export default ArrayComponent
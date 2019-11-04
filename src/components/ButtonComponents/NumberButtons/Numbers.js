import React from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
import "./Number.css";

//import any components needed X
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  
  //useState returns an array with 2 items
  //1. A piece of state (a reference to the state itself)
  //2. A function to update that piece of state.

 
  return (

      <div className="btn-container">
        {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass
        it any props needed by the child component*/}
        
        {numbers.map((index) => (
          <NumberButton buttonValue={index} />
        ))}

      </div>

  );
};

export default Numbers;

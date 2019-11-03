import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

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
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <NumberButton buttonValue={numbers[0]} />
      <NumberButton buttonValue={numbers[1]} />
      <NumberButton buttonValue={numbers[2]} />
      <NumberButton buttonValue={numbers[3]} />
      <NumberButton buttonValue={numbers[4]} />
      <NumberButton buttonValue={numbers[5]} />
      <NumberButton buttonValue={numbers[6]} />
      <NumberButton buttonValue={numbers[7]} />
      <NumberButton buttonValue={numbers[8]} />
      <NumberButton buttonValue={numbers[9]} />
      <NumberButton buttonValue={numbers[10]} />
    </div>
  );
};

export default Numbers;

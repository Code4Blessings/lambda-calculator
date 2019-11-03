import React, { useState } from "react";
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
 const [numberState, setNumberState] = useState(0);
 const display1 = () => setNumberState(1);
 const display2 = () => setNumberState(2);
 const display3 = () => setNumberState(3);
 const display4 = () => setNumberState(4);
 const display5 = () => setNumberState(5);
 const display6 = () => setNumberState(6);
 const display7 = () => setNumberState(7);
 const display8 = () => setNumberState(8);
 const display9 = () => setNumberState(9);
 const display0 = () => setNumberState(0);
 
  return (
    <div className="title">
      <div className="number-title">
          <h2>The Number is: {numberState}</h2>
      </div>

      <div className="btn-container">
        {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass
        it any props needed by the child component*/}
        
        <NumberButton number={display1} buttonValue={numbers[0]} />
        <NumberButton number={display2}buttonValue={numbers[1]} />
        <NumberButton number={display3} buttonValue={numbers[2]} />
        <NumberButton number={display4} buttonValue={numbers[3]} />
        <NumberButton number={display5} buttonValue={numbers[4]} />
        <NumberButton number={display6} buttonValue={numbers[5]} />
        <NumberButton number={display7} buttonValue={numbers[6]} />
        <NumberButton number={display8} buttonValue={numbers[7]} />
        <NumberButton number={display9} buttonValue={numbers[8]} />
        <NumberButton number={display0} buttonValue={numbers[9]} />
        <NumberButton buttonValue={numbers[10]} /> 
      
      </div>
    </div>
  );
};

export default Numbers;

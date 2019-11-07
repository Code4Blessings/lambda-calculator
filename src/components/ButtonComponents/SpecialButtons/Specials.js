import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
import "./Specials.css";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map((index) => (
          <SpecialButton buttonValue={index} />
        ))}
    </div>
  );
};

export default Specials;

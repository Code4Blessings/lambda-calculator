import React from "react";



const NumberButton = (props) => {
  const { buttonValue } = props
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button className="number-btn">{buttonValue}</button> 
    </div>
  );
};

export default NumberButton;

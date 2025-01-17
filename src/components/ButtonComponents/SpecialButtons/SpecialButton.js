import React from "react";


const SpecialButton = (props) => {
  const { buttonValue } = props;
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
       <button className="special-btn">{buttonValue}</button> 
    </div>
  );
};

export default SpecialButton;
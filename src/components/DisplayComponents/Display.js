import React from "react";


const Display = (props) => {
  const { display } = props;
  return (
    <div className="display">{/* Display any props data here */}
      {display}
    </div>
  )
};



export default Display;

import React from "react";
import { numbers } from "../../../data";

const NumberButton = () => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{Number(props.numbers[0])}</button>
      <button>{Number(props.numbers[1])}</button>
      <button>{Number(props.numbers[2])}</button>
      <button>{Number(props.numbers[3])}</button>
      <button>{Number(props.numbers[4])}</button>
      <button>{Number(props.numbers[5])}</button>
      <button>{Number(props.numbers[6])}</button>
      <button>{Number(props.numbers[7])}</button>
      <button>{Number(props.numbers[8])}</button>
      <button>{Number(props.numbers[9])}</button>
      <button>{Number(props.numbers[10])}</button>
      <button>{Number(props.numbers[11])}</button>
    </div>
  );
};

export default NumberButton;

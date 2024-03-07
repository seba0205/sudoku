import React, { useState } from "react";

/**
 *
 * @param {, trueValue, mutable} param takes in the intial value, the true value (correct answer), and whether or not this can be changed
 * @returns a cell component
 */
const Cell = ({ trueValue, mutable = true, row, col, box }) => {
  const initialValue = mutable ? 0 : trueValue;
  const [value, setValue] = useState(initialValue);
  console.log("testcell");
  const handleOnClick = () => {
    if (mutable) {
      if (value == 9) {
        setValue(0);
      } else setValue(value + 1);
    }
  };
  let className = "cell";
  if (!mutable) {
    className += " not-mutable";
  }

  //'0' is not needed in sudoku, so 0 here represents a blank cell
  const val = value > 0 ? String(value) : "";
  return (
    <div className={className} onClick={handleOnClick}>
      {val}
    </div>
  );
};

export default Cell;

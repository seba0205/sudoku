import React, { useState } from "react";

/**
 *
 * @param {, trueValue, mutable} param takes in the intial value, the true value (correct answer), and whether or not this can be changed
 * @returns a cell component
 */
const Cell = ({ trueValue, mutable = true, row, col }) => {
  const initialValue = mutable ? 0 : trueValue;
  const [value, setValue] = useState(initialValue);

  //TODO : figure out a better way to do this
  const box =
    row < 3 && col < 3
      ? 1
      : row < 3 && 3 <= col && col < 6
      ? 2
      : row < 3 && 6 <= col && col < 9
      ? 3
      : 3 <= row && row < 6 && col < 3
      ? 4
      : 3 <= row && row < 6 && 3 <= col && col < 6
      ? 5
      : 3 <= row && row < 6 && 6 <= col && col < 9
      ? 6
      : 3 <= row && row < 6 && col < 3
      ? 7
      : 6 <= row && row < 9 && 3 <= col && col < 6
      ? 8
      : 6 <= row && row < 9 && 6 <= col && col < 9
      ? 9
      : 0;

  console.log("testcell");
  const handleOnClick = () => {
    if (mutable) {
      if (value == 9) {
        setValue(0);
      } else setValue(value + 1);
    }
  };
  let className = "cell";
  if (mutable) {
    className += " mutable";
  }

  className += " box" + box;

  //'0' is not needed in sudoku, so 0 here represents a blank cell
  const val = value > 0 ? String(value) : "";
  return (
    <div className={className} onClick={handleOnClick}>
      {val}
    </div>
  );
};

export default Cell;

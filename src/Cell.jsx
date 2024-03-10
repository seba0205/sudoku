import React, { useState } from "react";

/**
 *
 * @param {, trueValue, mutable} param takes in the intial value, the true value (correct answer), and whether or not this can be changed
 * @returns a cell component
 */
const Cell = ({
  trueValue,
  mutable = true,
  row,
  col,
  box,
  isHighlighted = false,
  friends,
  id,
}) => {
  const initialValue = mutable ? 0 : trueValue;
  const [value, setValue] = useState(initialValue);
  const [highlight, setHighlighted] = useState(isHighlighted);

  //TODO : figure out a better way to do this

  const handleKeyDown = (e) => {
    if (/[1-9]/.test(e.key) && mutable) {
      setValue(e.key);
    }
  };
  const handleOnFocus = () => {
    setHighlighted(true);
    //TODO: figure out how to highlight cell friends
  };

  const handleOffFocus = () => {
    setHighlighted(false);
  };
  // const handleOnClick = () => {
  //   if (mutable) {
  //     if (value == 9) {
  //       setValue(0);
  //     } else setValue(value + 1);
  //   }
  // };

  const classList = [
    "cell",
    mutable && "mutable",
    highlight && "highlight",
    "box" + box,
    "row" + row,
    "col" + col,
  ];

  //'0' is not needed in sudoku, so 0 here represents a blank cell
  const val = value > 0 ? String(value) : "";
  return (
    <div
      className={classList.join(" ").trim()}
      onFocus={handleOnFocus}
      onBlur={handleOffFocus}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {val}
    </div>
  );
};

export default Cell;

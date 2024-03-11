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
  isHighlighted,
  setHighlight,
  clearHighlight,
  friends,
  id,
}) => {
  //handles the states - the initial value depends on if the cell is mutable or not
  const initialValue = mutable ? "" : trueValue;
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = (e) => {
    if (/[1-9]/.test(e.key) && mutable) {
      setValue(e.key);
    }
  };
  const handleOnFocus = () => {
    setHighlight(friends);
  };

  const handleOffFocus = () => {
    clearHighlight;
  };

  const classList = [
    "cell",
    mutable && "mutable",
    isHighlighted && "highlight",
    "box" + box,
    "row" + row,
    "col" + col,
  ];

  return (
    <div
      className={classList.join(" ").trim()}
      onFocus={handleOnFocus}
      onBlur={handleOffFocus}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {value}
    </div>
  );
};

export default Cell;

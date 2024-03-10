/**A grid is a collection of cells */
import Cell from "./Cell.jsx";
import React, { useState } from "react";

const Grid = ({ array, difficulty }) => {
  //build a sudoku grid from an array of numbers
  //cell blocks are : [x < 3 && y < 3] [3 < x < 6 && y < 3] [6 < x < 9 && y < 3] ...... etc TODO: figure out a way to represent this neatly

  function makeGrid(array) {
    return array.map((row, i) =>
      row.map((cell, j) => {
        const mutable = Math.random() * 100 > difficulty;
        const box = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
        return (
          <Cell
            trueValue={cell}
            mutable={mutable}
            row={i}
            col={j}
            box={box}
            id={"" + i + j + box}
          />
        );
      })
    );
  }
  const grid = makeGrid(array);

  return <div className="grid">{grid}</div>;
};

export default Grid;

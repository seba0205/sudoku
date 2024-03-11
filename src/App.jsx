import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Grid from "./Grid.jsx";
import puzzle from "./SudokuGenerator.js";

function App() {
  //TODO: Add checking for conflicts + state and history

  const sudoku = puzzle();
  const difficulty = 50;

  //makes the grid to pass to the grid component
  function makeGrid(array) {
    return array
      .map((row, i) =>
        row.map((cell, j) => {
          const mutable = Math.random() * 100 > difficulty;
          const box = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
          return {
            trueValue: cell,
            mutable: mutable,
            row: i,
            col: j,
            box: box,
            id: "" + i + j + box,
            isHighlighted: false,
          };
        })
      )
      .flat(2);
    //flattens to a depth of 2 so that instead of a 2d array we get a 1d array
  }

  return <Grid grid={makeGrid(sudoku)} />;
}

export default App;

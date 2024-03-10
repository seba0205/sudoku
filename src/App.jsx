import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Grid from "./Grid.jsx";
import puzzle from "./SudokuGenerator.js";

function App() {
  //TODO: Add a method for generating sudoku puzzles + checking for conflicts
  const test = [
    [4, 3, 5, 6, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const test2 = puzzle();

  return <Grid array={test2} difficulty={50} />;
}

export default App;

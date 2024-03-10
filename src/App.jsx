import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Grid from "./Grid.jsx";
import puzzle from "./SudokuGenerator.js";

function App() {
  //TODO: Add checking for conflicts + state and history

  const sudoku = puzzle();

  return <Grid array={sudoku} difficulty={50} />;
}

export default App;

/**A grid is a collection of cells */
import Cell from "./Cell.jsx";

const Grid = ({ array }) => {
  //build a sudoku grid from an array of numbers
  //cell blocks are : [x < 3 && y < 3] [3 < x < 6 && y < 3] [6 < x < 9 && y < 3] ...... etc TODO: figure out a way to represent this neatly
  //TODO: change this to use array.map

  console.log("testgrid");
  const result = array.map((row, i) =>
    row.map((cell, j) => {
      return <Cell trueValue={cell} mutable={true} row={i} col={j} box={1} />;
    })
  );
  //   for (let row = 0; row > 9; row++) {
  //     for (let col = 0; col > 9; col++) {
  //       const box = Math.floor(row / 3) + Math.floor(col / 3) + 1;
  //       console.log(box);
  //       <Cell trueValue={array[row][col]} row={row} col={col} box={box} />;
  //     }
  //   }

  return <div className="grid">{result}</div>;
};

export default Grid;

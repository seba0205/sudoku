/**A grid is a collection of cells */
import Cell from "./Cell.jsx";

const Grid = ({ array }) => {
  //build a sudoku grid from an array of numbers
  //cell blocks are : [x < 3 && y < 3] [3 < x < 6 && y < 3] [6 < x < 9 && y < 3] ...... etc TODO: figure out a way to represent this neatly
  //TODO: work out a method of choosing whether or not a cell is mutable
  const difficulty = 50;

  console.log("testgrid");
  const result = array.map((row, i) =>
    row.map((cell, j) => {
      const mutable = Math.random() * 100 > difficulty;
      return (
        <Cell trueValue={cell} mutable={mutable} row={i} col={j} box={1} />
      );
    })
  );

  return <div className="grid">{result}</div>;
};

export default Grid;

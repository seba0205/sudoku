/**A grid is a collection of cells */
import React, { useState } from "react";
import Cell from "./Cell.jsx";

const Grid = (props) => {
  //build a sudoku grid from an array of numbers

  //state handling
  const sudoku = { grid: props.grid };
  const [board, setBoard] = useState(sudoku);

  const setHighlight = (friends) => {
    setBoard({
      ...board,
      grid: board.grid.map((cell) => {
        if (friends.includes(cell.id)) {
          return { ...cell, isHighlighted: true };
        } else return { ...cell, isHighlighted: false };
      }),
    });
  };

  const clearHighlight = () => {
    setBoard({
      ...board,
      grid: board.grid.map((cell) => {
        return { ...cell, isHighlighted: false };
      }),
    });
  };

  return (
    <div className="grid">
      {board.grid.map((cell) => (
        <Cell
          row={cell.row}
          col={cell.col}
          box={cell.box}
          id={cell.id}
          trueValue={cell.trueValue}
          mutable={cell.mutable}
          friends={getFriends(board.grid, cell.row, cell.col, cell.box)}
          isHighlighted={cell.isHighlighted}
          setHighlight={setHighlight}
          clearHighlight={clearHighlight}
        />
      ))}
    </div>
  );
};

const getFriends = (grid, row, col, box) => {
  const colFriends = grid.filter(
    (cell) => cell.col == col || cell.row == row || cell.box == box
  );
  return colFriends.map((c) => c.id);
};

export default Grid;

function puzzle() {
  //a seed sudoku that I took from online somewhere
  const seed = [
    [9, 5, 6, 1, 4, 2, 7, 3, 8],
    [1, 2, 3, 5, 8, 7, 6, 9, 4],
    [7, 4, 8, 3, 6, 9, 5, 2, 1],
    [5, 3, 7, 9, 2, 1, 8, 4, 6],
    [4, 6, 2, 8, 7, 3, 1, 5, 9],
    [8, 1, 9, 4, 5, 6, 2, 7, 3],
    [2, 1, 7, 6, 9, 4, 3, 8, 5],
    [3, 8, 4, 7, 1, 5, 9, 6, 2],
    [6, 9, 5, 2, 3, 8, 4, 1, 7],
  ];
  //standard mapping of letters to numbers
  let original = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
    ["i", 9],
  ]);

  //shuffling an array of letters randomly
  let change = ["a", "b", "c", "d", "e", "f", "g", "h", "i"].sort(
    (a, b) => 0.5 - Math.random()
  );

  //going through the seed array and changing each number to a corresponding letter
  //will end up with an array of tokens that represent a sudoku puzzle
  //i can then change these back to numbers using the non-shuffled map to get an almost-random sudoku
  //users will not notice

  let reference = new Map();
  const temp = seed.map((row, i) =>
    row.map((num, j) => {
      if (reference.get(num)) {
        return reference.get(num);
      } else {
        reference.set(num, change[num - 1]);
        return change[num - 1];
      }
    })
  );
  //changing back from tokens to numbers
  const result = temp.map((row, i) =>
    row.map((val, j) => {
      return original.get(val);
    })
  );
  return result;
}

export default puzzle;

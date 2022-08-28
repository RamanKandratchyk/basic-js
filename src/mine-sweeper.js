const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let L = matrix.length;
  let l = matrix[0].length;

  let resArr = [], count;
  for (let i = 0; i < L; i++) {
    resArr[i] = [];
    for (let j = 0; j < l; j++) {
      resArr[i].push(0);
    };
  }

  matrix.forEach((el, i, arrExt) => {
    el.forEach((item, j, arrIn) => {
      count = 0;
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1]) ++count;
      if (i - 1 >= 0 && matrix[i - 1][j]) ++count;
      if (i - 1 >= 0 && j + 1 < l && matrix[i - 1][j + 1]) ++count;
      if (j - 1 >= 0 && matrix[i][j - 1]) ++count;
      if (j + 1 < l && matrix[i][j + 1]) ++count;
      if (i + 1 < L && j - 1 >= 0 && matrix[i + 1][j - 1]) ++count;
      if (i + 1 < L && matrix[i + 1][j]) ++count;
      if (i + 1 < L && j + 1 < l && matrix[i + 1][j + 1]) ++count;
      resArr[i][j] = count;
    });
  });

  return resArr;
};

module.exports = {
  minesweeper
};

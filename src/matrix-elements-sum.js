const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let maskArr = [];
  maskArr.length = matrix[0].length;

  for (let i = 0; i < maskArr.length; i++) {
    maskArr[i] = true;
  };

  matrix.forEach(el => {

    el.forEach((item, i) => {

      if (item === 0) maskArr[i] = false;
      if (item !== 0 && maskArr[i]) sum += item;

    });

  });

  return sum;
};

module.exports = {
  getMatrixElementsSum
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nIndex;
  let flag = true;

  let nArr = String(n).split('');
  nArr.forEach((el, i, arr) => {
    if (arr[i + 1] && flag) {
      if (el < arr[i + 1]) {
        nIndex = i;
        flag = false;
      };
    };
  });

  if (flag) {
    nArr.length = nArr.length - 1;
  } else {
    nArr.splice(nIndex, 1);
  };

  return +nArr.join('');
};

module.exports = {
  deleteDigit
};

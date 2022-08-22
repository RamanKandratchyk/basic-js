const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let n = 0;
  
  str.split('').forEach((el, i, arr) => {
    if (arr[i] === arr[i + 1]) {
      n++;
    } else {
      result.push(n + 1 === 1 ? '' : n + 1, el);
      n = 0;
    };
  });

  return result.join('');
};

module.exports = {
  encodeLine
};

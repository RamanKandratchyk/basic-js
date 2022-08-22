const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  if (Array.isArray(arr) === false) throw Error(`'arr' parameter must be an instance of the Array!`);

  let resultArr = [];
  let discardIndexArr = [];
  let seqArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  arr.forEach((el, i, initArr) => {

    if (seqArr.indexOf(el) !== -1) {
      if (el === '--discard-next') {
        if (initArr[i + 1]) { discardIndexArr.push(i + 1) };
      };

      if (el === '--discard-prev') {
        if (initArr[i - 1] && discardIndexArr.indexOf(i - 1) === -1) { resultArr.pop() };
      };

      if (el === '--double-next') {
        if (initArr[i + 1]) { resultArr.push(initArr[i + 1]) };
      };

      if (el === '--double-prev') {
        if (initArr[i - 1] && discardIndexArr.indexOf(i - 1) === -1) { resultArr.push(initArr[i - 1]) };
      };
    } else {
      if (discardIndexArr.indexOf(i) === -1) resultArr.push(el);
    };
    
  });

  return resultArr;
};

module.exports = {
  transform
};

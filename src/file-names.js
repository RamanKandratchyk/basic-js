const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = names.slice();

  let initN, curN, N, interim;

  arr.forEach((el, i, M) => {
    interim = 0;
    initN = names.slice(0, i).filter(item => item === el).length;
    curN = M.slice(0, i).filter(item => item === el).length;

    N = Math.max(initN, curN);

    if (N > 0) interim = M[i] + '(' + N + ')'

    if (M.slice(0, i).includes(interim, 0)) {
      M[i] += '(' + (N + 1) + ')';
    } else {
      if (N > 0) M[i] += '(' + N + ')';
    };
  });

  return arr;
}

module.exports = {
  renameFiles
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(el => el.split('.').reverse());

  let resArr = [];

  arr.forEach((el, i) => {
    el.forEach((item, j, A) => {
      resArr.push(A.slice(0, j + 1).join('.'));
    });
  });

  let uniqueDomains = new Set(resArr);

  let obj = new Object;
  for (let value of uniqueDomains) {
    obj['.' + value] = resArr.reduce((s, cur) => s + (cur === value ? 1 : 0), 0);
  };

  return obj;
}

module.exports = {
  getDNSStats
};

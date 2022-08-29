const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.addition === undefined) options.addition = '';
  if (str && options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition && options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;

  let optionsStr = Object.fromEntries(Object.entries(options).map(([key, value]) => [key, String(value)]));

  let sepArr = [];
  for (let i = 0; i < +optionsStr.additionRepeatTimes; i++) {
    sepArr.push(optionsStr.addition);
  };

  let sepStr = sepArr.join(optionsStr.additionSeparator);

  let resultArr = [];
  for (let i = 0; i < +optionsStr.repeatTimes; i++) {
    resultArr.push(str + sepStr);
  };

  return resultArr.join(optionsStr.separator);
}

module.exports = {
  repeater
};

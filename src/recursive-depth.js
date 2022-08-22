const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  constructor() {
    this.count = 1;
    this.resArr = [];
    this.flag = false;
    this.result = 0;

    this.addCount = 1;
    this.addResArr = [];
    this.addFlag = true;
  }

  addCalc(addArr) {

    this.flag = false;

    addArr.forEach(elem => {
      if (Array.isArray(elem)) {

        this.addCount++;
        this.flag = true;
        this.addCalc(elem);

      };
    });

    if (!this.flag) {
      this.addResArr.push(this.addCount);
      this.addCount = 1;
    };

    return this.addResArr.length;
  }

  calculateDepth(arr) {

    if (this.addFlag) {
      this.addCalc(arr);
      this.addFlag = false;
    };

    this.flag = false;

    arr.forEach(elem => {
      if (Array.isArray(elem)) {

        this.count++;
        this.flag = true;
        this.calculateDepth(elem);

      };
    });

    if (!this.flag) {
      this.resArr.push(this.count);
      this.count = 1;
    };

    this.result = Math.max(...this.resArr);

    if (this.resArr.length === this.addResArr.length) this.initValues();

    return this.result;
  }

  initValues() {
    this.count = 1;
    this.resArr = [];
    this.flag = false;

    this.addCount = 1;
    this.addResArr = [];
    this.addFlag = true;
  }
};

module.exports = {
  DepthCalculator
};

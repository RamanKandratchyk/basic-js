const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  resultArr: [],

  getLength() {
    return this.resultArr.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chainArr.push(' ');
    } else {
      this.chainArr.push(String(value));
    };
    return chainMaker;
  },

  removeLink(position) {
    if (typeof (position) !== 'number' || (position ^ 0) !== position || this.chainArr[position - 1] === undefined) {
      this.chainArr.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    };

    this.chainArr.splice(position - 1, 1);

    return chainMaker;
  },

  reverseChain() {
    this.chainArr.reverse();
    return chainMaker;
  },

  finishChain() {
    this.chainArr = this.chainArr.map(el => {
      if (el === ' ') {
        return '( )';
      } else {
        return '( ' + el + ' )';
      };
    });

    this.resultArr = this.chainArr.slice();
    this.chainArr.length = 0;
    return this.resultArr.join('~~');
  }
};

module.exports = {
  chainMaker
};

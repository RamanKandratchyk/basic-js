const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction === undefined ? true : direction;
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let spaceArr = [], countSpaces = 0;
    message.split('').forEach((el, i) => {
      if (el === ' ') {
        spaceArr.push(i - countSpaces);
        countSpaces++;
      };
    });

    message = message.toUpperCase().split(' ').join('');
    key = key.toUpperCase();

    let result = '';

    for (let i = 0; i < message.length; i++) {
      let messI = this.alpha.indexOf(message[i]);

      if (messI === -1) {
        this.c = message[i];
      } else {
        let keyI_s = key[((i >= key.length) ? i % key.length : i)];
        let keyI = this.alpha.indexOf(keyI_s);
        this.c = this.alpha[(((this.alpha.length + (messI + keyI)) % this.alpha.length))];
      };

      result += this.c;
    };

    let resultSpaces = [];
    result.split('').forEach((el, i) => {
      if (spaceArr.includes(i)) resultSpaces.push(' ');
      resultSpaces.push(el);
    });

    return this.direction ? resultSpaces.join('') : resultSpaces.reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let spaceArr = [], countSpaces = 0;
    message.split('').forEach((el, i) => {
      if (el === ' ') {
        spaceArr.push(i - countSpaces);
        countSpaces++;
      };
    });

    message = message.toUpperCase().split(' ').join('');
    key = key.toUpperCase();

    let result = '';

    for (let i = 0; i < message.length; i++) {
      let messI = this.alpha.indexOf(message[i]);

      if (messI === -1) {
        this.c = message[i];
      } else {
        let keyI_s = key[((i >= key.length) ? i % key.length : i)];
        let keyI = this.alpha.indexOf(keyI_s);
        this.c = this.alpha[(((this.alpha.length + (messI - keyI)) % this.alpha.length))];
      };

      result += this.c;
    };

    let resultSpaces = [];
    result.split('').forEach((el, i) => {
      if (spaceArr.includes(i)) resultSpaces.push(' ');
      resultSpaces.push(el);
    });

    return this.direction ? resultSpaces.join('') : resultSpaces.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

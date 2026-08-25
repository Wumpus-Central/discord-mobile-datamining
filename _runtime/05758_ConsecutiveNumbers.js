// === Module 5758: ConsecutiveNumbers ===

// Module 5758 (ConsecutiveNumbers)
import _createClassDefault from "_createClass" /* 5745 */;
import ConsecutiveNumbers from "_classCallCheck" /* 5744 */;

class ConsecutiveNumbers {
  constructor(arg0, arg1) {
    tmp = ConsecutiveNumbers(this, ConsecutiveNumbers);
    this.startIndex = global;
    this.endIndex = arg1;
    return;
  }
}
let obj = {
  key: "length",
  get() {
    return Math.max(0, this.endIndex - this.startIndex + 1);
  }
};
const items = [
  obj,
  {
    key: "at",
    value: function at(arg0) {
      return this.startIndex + arg0;
    }
  },
  {
    key: "equals",
    value: function equals(startIndex) {
      return this.startIndex === startIndex.startIndex && this.endIndex === startIndex.endIndex;
    }
  },
  {
    key: "toArray",
    value: function toArray() {
      let length;
      const self = this;
      if (0 === this.length) {
        return [];
      } else {
        const _Array = Array;
        const array = new Array(self.length);
        let num2 = 0;
        if (0 < self.length) {
          do {
            array[num2] = self.startIndex + num2;
            num2 = num2 + 1;
            length = self.length;
          } while (num2 < length);
        }
        return array;
      }
    }
  },
  {
    key: "includes",
    value: function includes(arg0) {
      return arg0 >= this.startIndex && arg0 <= this.endIndex;
    }
  },
  {
    key: "indexOf",
    value: function indexOf(arg0) {
      let num = -1;
      if (this.includes(arg0)) {
        num = arg0 - this.startIndex;
      }
      return num;
    }
  },
  {
    key: "findValue",
    value: function findValue(arg0) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        const sum = self.startIndex + num;
        while (!arg0(sum, num, self)) {
          num = num + 1;
        }
        return sum;
      }
    }
  },
  {
    key: "every",
    value: function every(arg0) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        while (arg0(self.startIndex + num, num, self)) {
          num = num + 1;
        }
        return false;
      }
      return true;
    }
  },
  {
    key: "slice",
    value: function slice() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 0;
      }
      const self = this;
      let length = arg1;
      if (arg1 === undefined) {
        length = self.length;
      }
      const sum = self.startIndex + num;
      const bound = Math.max(sum - 1, self.startIndex + Math.min(length, self.length) - 1);
      const obj = Object.create(ConsecutiveNumbers.prototype);
      ConsecutiveNumbers(obj, ConsecutiveNumbers);
      obj.startIndex = sum;
      obj.endIndex = bound;
      return obj;
    }
  },

];
obj = {
  key: Symbol.iterator,
  value() {
    const self = this;
    c3 = 0;
    c4 = 0;
    return (function* value() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const endIndex = _self;
              closure_1 = tmp4;
              _self = undefined;
              _self = _self.startIndex;
              if (_self <= _self.endIndex) {
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = _self;
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            _self = _self + 1;
          }
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
  }
};
items[9] = obj;
let tmp2 = _createClassDefault(ConsecutiveNumbers, items);
tmp2 = new tmp2(-1, -2);
tmp2.EMPTY = tmp2;

export const ConsecutiveNumbers = tmp2;
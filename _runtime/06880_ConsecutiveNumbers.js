// _runtime/06880_ConsecutiveNumbers.js
import _modDef6867 from "metro/06867__.js";
import _classCallCheck from "metro/06866__.js";

class ConsecutiveNumbers {
  constructor(arg0, arg1) {
    tmp = closure_0(this, ConsecutiveNumbers);
    this.startIndex = global;
    this.endIndex = arg1;
    return;
  }
}
_classCallCheck = ConsecutiveNumbers;
const items = [
  {
    key: "length",
    get() {
      return Math.max(0, this.endIndex - this.startIndex + 1);
    },
  },
  {
    key: "at",
    value: function at(arg0) {
      return this.startIndex + arg0;
    },
  },
  {
    key: "equals",
    value: function equals(startIndex) {
      return this.startIndex === startIndex.startIndex && this.endIndex === startIndex.endIndex;
    },
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
    },
  },
  {
    key: "includes",
    value: function includes(arg0) {
      return arg0 >= this.startIndex && arg0 <= this.endIndex;
    },
  },
  {
    key: "indexOf",
    value: function indexOf(arg0) {
      let num = -1;
      if (this.includes(arg0)) {
        num = arg0 - this.startIndex;
      }
      return num;
    },
  },
  {
    key: "findValue",
    value: function findValue(fn) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        const sum = self.startIndex + num;
        while (!fn(sum, num, self)) {
          num = num + 1;
        }
        return sum;
      }
    },
  },
  {
    key: "every",
    value: function every(fn) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        while (fn(self.startIndex + num, num, self)) {
          num = num + 1;
        }
        return false;
      }
      return true;
    },
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
      const obj = Object.create(_classCallCheck.prototype);
      _classCallCheck(obj, _classCallCheck);
      obj.startIndex = sum;
      obj.endIndex = bound;
      return obj;
    },
  },
];
const entry = {
  key: Symbol.iterator,
  value() {
    const self = this;
    c3 = 0;
    c4 = 0;
    return (function* value(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              endIndex = self;
              closure_1 = tmp4;
              let startIndex;
              startIndex = self.startIndex;
              if (startIndex <= self.endIndex) {
                c3 = 1;
                c4 = 1;
                const obj1 = { value: startIndex, done: false };
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            startIndex = startIndex + 1;
          }
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
  },
};
items[9] = entry;
let tmp2 = _modDef6867(ConsecutiveNumbers, items);
tmp2 = new tmp2(-1, -2);
tmp2.EMPTY = tmp2;

export const ConsecutiveNumbers = tmp2;

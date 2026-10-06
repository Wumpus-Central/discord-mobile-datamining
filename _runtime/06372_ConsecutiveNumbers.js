// _runtime/06372_ConsecutiveNumbers.js
import _createClassDefault from "metro/06359__createClass.js";
import _classCallCheck from "metro/06358__classCallCheck.js";

let closure_1, endIndex;

class ConsecutiveNumbers {
  constructor(startIndex, findLastVisibleIndexResult) {
    _classCallCheck(this, ConsecutiveNumbers);
    this.startIndex = startIndex;
    this.endIndex = findLastVisibleIndexResult;
  }
}
let obj = {
  key: "length",
  get() {
    return Math.max(0, this.endIndex - this.startIndex + 1);
  },
};
const items = [
  obj,
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
        const self2 = this;
        const self3 = this;
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
      const obj = Object.create(ConsecutiveNumbers.prototype);
      _classCallCheck(obj, ConsecutiveNumbers);
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
    let c3 = 0;
    let c4 = 0;
    return (function* value(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              endIndex = self;
              closure_1 = tmp3;
              value = self.startIndex;
              if (value > self.endIndex) {
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            value = value + 1;
          }
          c3 = 1;
          c4 = 1;
          return { value, done: false };
        } catch (tmp12) {
          c4 = 3;
          throw tmp12;
        }
      }
    })();
  },
};
items[9] = entry;
const tmp2 = _createClassDefault(ConsecutiveNumbers, items);
tmp2.EMPTY = new tmp2(-1, -2);
new tmp2(-1, -2);
const ConsecutiveNumbers_export = tmp2;

export { ConsecutiveNumbers_export as ConsecutiveNumbers };

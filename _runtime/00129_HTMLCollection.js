import _classCallCheck from "_classCallCheck";
import setPlatformObject from "setPlatformObject";

const HTMLCollection = arg1;
let closure_3 = { value: {}, enumerable: true, configurable: false, writable: false };
class HTMLCollection {
  constructor(arg0) {
    self = this;
    tmp = outer1_2(this, HTMLCollection);
    num = 0;
    if (0 < global.length) {
      do {
        tmp2 = outer1_3;
        outer1_3.value = global[num];
        _Object = Object;
        definePropertyResult = Object.defineProperty(self, num, outer1_3);
        num = num + 1;
        length = global.length;
      } while (num < length);
    }
    self._length = global.length;
    return;
  }
}
let obj = {
  key: "length",
  get() {
    return this._length;
  }
};
const items = [
  obj,
  {
    key: "item",
    value: function item(arg0) {
      if (arg0 >= 0) {
        if (arg0 < this._length) {
          return this[arg0];
        }
      }
      return null;
    }
  },
  {
    key: "namedItem",
    value: function namedItem(arg0) {
      return null;
    }
  },

];
obj = {
  key: Symbol.iterator,
  value() {
    return HTMLCollection(128).createValueIterator(this);
  }
};
items[3] = obj;
let tmp2 = require("_createClass")(HTMLCollection, items);
let c4 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createHTMLCollection = function createHTMLCollection(childNodes) {
  return new closure_4(childNodes);
};
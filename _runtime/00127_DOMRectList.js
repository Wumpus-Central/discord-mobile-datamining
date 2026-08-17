// _runtime/00127_DOMRectList.js
import _createClassDefault from "_createClass" /* 42 */;
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_classPrivateFieldBase" /* 90 */;
import setPlatformObject from "setPlatformObject" /* 126 */;

const DOMRectList = arg1;
let closure_4 = _classPrivateFieldKeyDefault("length");
class DOMRectList {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, DOMRectList);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    num = 0;
    if (0 < global.length) {
      do {
        _Object = Object;
        obj = { value: null, enumerable: true, configurable: false, writable: false };
        obj[0] = global[num];
        definePropertyResult1 = Object.defineProperty(self, num, obj);
        num = num + 1;
        length = global.length;
      } while (num < length);
    }
    closure_3(self, closure_4)[closure_4] = global.length;
    return;
  }
}
let obj = {
  key: "length",
  get() {
    return callback2(this, closure_4)[closure_4];
  }
};
const items = [
  obj,
  {
    key: "item",
    value: function item(arg0) {
      if (arg0 >= 0) {
        const self = this;
        if (arg0 < callback2(this, closure_4)[closure_4]) {
          return self[arg0];
        }
      }
      return null;
    }
  },

];
obj = {
  key: Symbol.iterator,
  value() {
    return DOMRectList(128).createValueIterator(this);
  }
};
items[2] = obj;
const importDefaultResultResult = _createClassDefault(DOMRectList, items);
let c5 = importDefaultResultResult;
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const createDOMRectList = function createDOMRectList(arg0) {
  return new closure_5(arg0);
};
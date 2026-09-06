// === Module 127: DOMRectList ===

// Module 127 (DOMRectList)
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;

const DOMRectList = fn;
let closure_4 = _classPrivateFieldKeyDefault("length");
class DOMRectList {
  constructor(arg0) {
    self = this;
    tmp = c2(this, DOMRectList);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    num = 0;
    if (0 < global.length) {
      do {
        _Object = Object;
        obj = { value: null, enumerable: true, configurable: false, writable: false };
        obj.value = global[num];
        definePropertyResult1 = Object.defineProperty(self, num, obj);
        num = num + 1;
        length = global.length;
      } while (num < length);
    }
    closure_3(self, closure_4)[closure_4] = global.length;
    return;
  }
}
const items = [
  {
    key: "length",
    get() {
      return _classPrivateFieldBase(this, closure_4)[closure_4];
    }
  },
  {
    key: "item",
    value: function item(arg0) {
      if (arg0 >= 0) {
        const self = this;
        if (arg0 < _classPrivateFieldBase(this, closure_4)[closure_4]) {
          return self[arg0];
        }
      }
      return null;
    }
  },

];
const entry = {
  key: Symbol.iterator,
  value() {
    return DOMRectList(128).createValueIterator(this);
  }
};
items[2] = entry;
const importDefaultResultResult = _createClass(DOMRectList, items);
const hasOwnProperty = importDefaultResultResult;
const module_126 = fn(126);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const createDOMRectList = function createDOMRectList(arg0) {
  return new importDefaultResultResult(arg0);
};
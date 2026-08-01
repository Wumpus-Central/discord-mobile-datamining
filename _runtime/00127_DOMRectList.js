// === Module 127: DOMRectList ===

// Module 127 (DOMRectList)
import _classCallCheck from "_classCallCheck";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import setPlatformObject from "setPlatformObject";

const DOMRectList = arg1;
let closure_4 = require("_classPrivateFieldKey")("length");
class DOMRectList {
  constructor(arg0) {
    self = this;
    tmp = outer1_2(this, DOMRectList);
    definePropertyResult = Object.defineProperty(this, length, { writable: true, value: "a" });
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
    outer1_3(self, length)[length] = global.length;
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
const importDefaultResultResult = require("_createClass")(DOMRectList, items);
let c5 = importDefaultResultResult;
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const createDOMRectList = function createDOMRectList(arg0) {
  return new closure_5(arg0);
};
// _runtime/metro/00127__.js
import _classPrivateFieldKeyDefault from "../00091__classPrivateFieldKey.js";
import _mod128 from "00128__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import 00126__ from "00126__.js";

let closure_4 = _classPrivateFieldKeyDefault("length");
class DOMRectList {
  constructor(arg0) {
    let length;
    const self = this;
    _classCallCheck(this, DOMRectList);
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    let num = 0;
    if (0 < arg0.length) {
      do {
        let _Object = Object;
        let obj = { value: arg0[num], enumerable: true, configurable: false, writable: false };
        let definePropertyResult1 = Object.defineProperty(self, num, obj);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    _classPrivateFieldBase(self, closure_4)[closure_4] = arg0.length;
  }
}
let obj = {
  key: "length",
  get() {
    return _classPrivateFieldBase(this, closure_4)[closure_4];
  }
};
const items = [
  obj,
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
    const obj = _mod128;
    return obj.createValueIterator(this);
  }
};
items[2] = entry;
const importDefaultResultResult = _createClass(DOMRectList, items);
const hasOwnProperty = importDefaultResultResult;
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const createDOMRectList = function createDOMRectList(View) {
  const tmp = new hasOwnProperty(View);
  return tmp;
};
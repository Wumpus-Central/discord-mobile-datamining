// _runtime/00129_HTMLCollection.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";
import setPlatformObject from "00126_setPlatformObject.js";

const HTMLCollection = arg1;
let closure_3 = { value: {}, enumerable: true, configurable: false, writable: false };
class HTMLCollection {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, HTMLCollection);
    num = 0;
    if (0 < global.length) {
      do {
        tmp2 = closure_3;
        closure_3.value = global[num];
        _Object = Object;
        definePropertyResult = Object.defineProperty(self, num, closure_3);
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
let tmp2 = _createClassDefault(HTMLCollection, items);
let closure_4 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createHTMLCollection = function createHTMLCollection(childNodes) {
  return new closure_4(childNodes);
};
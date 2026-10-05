// === Module 129: ? ===

// Module 129
import _createClassDefault from "_createClass" /* 42 */;
import _mod128 from "module_128" /* 128 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import module_126 from "module_126" /* 126 */;

let closure_3 = { value: {}, enumerable: true, configurable: false, writable: false };
class HTMLCollection {
  constructor(arg0) {
    let length;
    const self = this;
    _classCallCheck(this, HTMLCollection);
    let num = 0;
    if (0 < arg0.length) {
      do {
        closure_3.value = arg0[num];
        let _Object = Object;
        let definePropertyResult = Object.defineProperty(self, num, closure_3);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    self._length = arg0.length;
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
const entry = {
  key: Symbol.iterator,
  value() {
    const obj = _mod128;
    return obj.createValueIterator(this);
  }
};
items[3] = entry;
const tmp2 = _createClassDefault(HTMLCollection, items);
let closure_4 = tmp2;
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createHTMLCollection = function createHTMLCollection(childNodes) {
  const tmp = new closure_4(childNodes);
  return tmp;
};
// _runtime/00129_HTMLCollection.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const HTMLCollection = fn;
let closure_3 = { value: {}, enumerable: true, configurable: false, writable: false };
class HTMLCollection {
  constructor(arg0) {
    self = this;
    tmp = c2(this, HTMLCollection);
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
const items = [
  {
    key: "length",
    get() {
      return this._length;
    },
  },
  {
    key: "item",
    value: function item(arg0) {
      if (arg0 >= 0) {
        if (arg0 < this._length) {
          return this[arg0];
        }
      }
      return null;
    },
  },
  {
    key: "namedItem",
    value: function namedItem(arg0) {
      return null;
    },
  },
];
const entry = {
  key: Symbol.iterator,
  value() {
    return HTMLCollection(128).createValueIterator(this);
  },
};
items[3] = entry;
let tmp2 = _createClassDefault(HTMLCollection, items);
let closure_4 = tmp2;
const module_126 = fn(126);
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createHTMLCollection = function createHTMLCollection(childNodes) {
  return new closure_4(childNodes);
};

// _runtime/metro/00130__.js
import _createClassDefault from "00042__createClass.js";
import _mod128 from "00128__.js";
import _classCallCheck from "00041__classCallCheck.js";
import 00126__ from "00126__.js";

let closure_3 = { value: {}, writable: false };
class NodeList {
  constructor(arg0) {
    let length;
    const self = this;
    _classCallCheck(this, NodeList);
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
    key: "entries",
    value: function entries() {
      const obj = _mod128;
      return obj.createEntriesIterator(this);
    }
  },
  {
    key: "forEach",
    value: function forEach(call, arg1) {
      const self = this;
      let num = 0;
      if (0 < this._length) {
        do {
          if (null == arg1) {
            let tmp3 = call(self[num], num, self);
          } else {
            let tmp2 = self[num];
            let callResult = call.call(arg1, tmp2, tmp, self);
          }
          num = num + 1;
        } while (num < self._length);
      }
    }
  },
  {
    key: "keys",
    value: function keys() {
      const obj = _mod128;
      return obj.createKeyIterator(this);
    }
  },
  {
    key: "values",
    value: function values() {
      const obj = _mod128;
      return obj.createValueIterator(this);
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
items[6] = entry;
let tmp2 = _createClassDefault(NodeList, items);
let closure_4 = tmp2;
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createNodeList = function createNodeList(addedNodes) {
  const tmp = new closure_4(addedNodes);
  return tmp;
};
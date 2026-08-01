// === Module 130: NodeList ===

// Module 130 (NodeList)
import _classCallCheck from "_classCallCheck";
import setPlatformObject from "setPlatformObject";

const NodeList = arg1;
let closure_3 = { value: {}, writable: false };
class NodeList {
  constructor(arg0) {
    self = this;
    tmp = outer1_2(this, NodeList);
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
    key: "entries",
    value: function entries() {
      return NodeList(128).createEntriesIterator(this);
    }
  },
  {
    key: "forEach",
    value: function forEach(call) {
      const self = this;
      let num = 0;
      if (0 < this._length) {
        do {
          if (null == arg1) {
            let tmp4 = call(self[num], num, self);
          } else {
            call = call.call;
            let tmp2 = self[num];
            if (typeof call === "unknown") {
              let tmp3 = call(tmp2, num, self);
            } else {
              let tmp5 = call;
              let tmp6 = arg1;
              let tmp7 = tmp2;
              let tmp8 = num;
              let tmp9 = self;
              let callResult = call(arg1, tmp2, tmp, self);
            }
          }
          num = num + 1;
        } while (num < self._length);
      }
    }
  },
  {
    key: "keys",
    value: function keys() {
      return NodeList(128).createKeyIterator(this);
    }
  },
  {
    key: "values",
    value: function values() {
      return NodeList(128).createValueIterator(this);
    }
  },

];
obj = {
  key: Symbol.iterator,
  value() {
    return NodeList(128).createValueIterator(this);
  }
};
items[6] = obj;
let tmp2 = require("_createClass")(NodeList, items);
let c4 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createNodeList = function createNodeList(addedNodes) {
  return new closure_4(addedNodes);
};
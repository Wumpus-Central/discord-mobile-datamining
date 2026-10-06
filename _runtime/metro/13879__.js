// _runtime/metro/13879__.js
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

let map;

class LRUCache {
  constructor() {
    _classCallCheck(this, LRUCache);
    this.max = 1000;
    this.map = new Map();
    new Map();
  }
}
const entry = {
  key: "get",
  value: function get(arg0) {
    const self = this;
    map = this.map;
    const value = map.get(arg0);
    let tmp2;
    if (undefined !== value) {
      const map2 = self.map;
      map2.delete(arg0);
      const map3 = self.map;
      const result = map3.set(arg0, value);
      tmp2 = value;
    }
    return tmp2;
  },
};
const items = [
  entry,
  {
    key: "delete",
    value: function _delete(arg0) {
      map = this.map;
      return map.delete(arg0);
    },
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      const self = this;
      if (!this.delete(arg0)) {
        if (undefined !== arg1) {
          if (self.map.size >= self.max) {
            map = self.map;
            const iter = map.keys();
            self.delete(iter.next().value);
          }
          const map2 = self.map;
          const result = map2.set(arg0, arg1);
        }
      }
      return self;
    },
  },
];

export default _createClass(LRUCache, items);

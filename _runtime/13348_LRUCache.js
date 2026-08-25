// === Module 13348: LRUCache ===

// Module 13348 (LRUCache)
import _createClass from "_createClass" /* 42 */;
import LRUCache from "_classCallCheck" /* 41 */;

class LRUCache {
  constructor() {
    tmp = LRUCache(this, LRUCache);
    this.max = 1000;
    map = new Map();
    this.map = map;
    return;
  }
}
const items = [
  {
    key: "get",
    value: function get(arg0) {
      const self = this;
      const value = this.map.get(arg0);
      let tmp2;
      if (undefined !== value) {
        self.map.delete(arg0);
        const result = self.map.set(arg0, value);
        tmp2 = value;
        const map2 = self.map;
        const map3 = self.map;
      }
      return tmp2;
    }
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      return this.map.delete(arg0);
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      const self = this;
      if (!this.delete(arg0)) {
        if (undefined !== arg1) {
          if (self.map.size >= self.max) {
            self.delete(self.map.keys().next().value);
            const iter = self.map.keys();
            const map = self.map;
          }
          const result = self.map.set(arg0, arg1);
          const map2 = self.map;
        }
      }
      return self;
    }
  }
];

export default _createClass(LRUCache, items);
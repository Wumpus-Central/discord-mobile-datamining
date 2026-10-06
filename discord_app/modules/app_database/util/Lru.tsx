// === Module 7003: Lru ===

// Module 7003 (Lru)
import size from "module_2" /* 2 */;

class Lru {
  constructor(capacity) {
    const obj = Object.create(new.target.prototype);
    obj.items = new Map();
    obj.limit = capacity;
    new Map();
    return obj;
  }
  entries() {
    const items = this.items;
    return items.entries();
  }
  keys() {
    const items = this.items;
    return items.keys();
  }
  values() {
    const items = this.items;
    return items.values();
  }
  ordered() {
    const items = this.items;
    const items1 = [...items.values()];
    return items1.reverse();
  }
  clear() {
    const items = this.items;
    items.clear();
  }
  has(arg0) {
    const items = this.items;
    return items.has(arg0);
  }
  get(arg0) {
    const items = this.items;
    return items.get(arg0);
  }
  put(arg0, arg1) {
    let items3;
    let items4;
    const self = this;
    const items = this.items;
    items.delete(arg0);
    const items2 = this.items;
    const result = items2.set(arg0, arg1);
    if (this.items.size > this.limit) {
      const oldestKeyResult = self.oldestKey();
      ({ items: items3, items: items4 } = self);
      const value = items3.get(oldestKeyResult);
      items4.delete(oldestKeyResult);
      const items1 = [oldestKeyResult, value];
      return items1;
    }
  }
  delete(arg0) {
    const items = this.items;
    return items.delete(arg0);
  }
  oldestKey() {
    const items = this.items;
    const iter = items.keys();
    return iter.next().value;
  }
}
const prototype = Lru.prototype;
Object.defineProperty(prototype, "length", {
  get: function length() {
    return this.items.size;
  },
  set: undefined
});
Object.defineProperty(prototype, "capacity", {
  get: function capacity() {
    return this.limit;
  },
  set: undefined
});
prototype[Symbol.iterator] = function() {
  const items = this.items;
  return items.entries();
};
let result = size.fileFinishedImporting("modules/app_database/util/Lru.tsx");

export { Lru };
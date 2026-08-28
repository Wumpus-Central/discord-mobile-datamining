// === Module 7173: length ===

// Module 7173 (length)
import set from "set" /* 2 */;

class Lru {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj.items = map;
    obj.limit = global;
    return obj;
  }
}
const prototype = Lru.prototype;
Object.defineProperty(prototype, "length", {
  get: function length() {
    return this.items.size;
  },
  set: undefined
});
const get = function capacity() {
  return this.limit;
};
Object.defineProperty(prototype, "capacity", { get, set: undefined });
// ToPropertyKey (0xa4)
prototype[get] = function() {
  const items = this.items;
  return items.entries();
};
prototype["entries"] = function entries() {
  const items = this.items;
  return items.entries();
};
prototype["keys"] = function keys() {
  const items = this.items;
  return items.keys();
};
prototype["values"] = function values() {
  const items = this.items;
  return items.values();
};
prototype["ordered"] = function ordered() {
  let items = this.items;
  items = [...items.values()];
  return items.reverse();
};
prototype["clear"] = function clear() {
  const items = this.items;
  items.clear();
};
prototype["has"] = function has(arg0) {
  const items = this.items;
  return items.has(arg0);
};
prototype["get"] = function get(arg0) {
  const items = this.items;
  return items.get(arg0);
};
prototype["put"] = function put(arg0, arg1) {
  const self = this;
  let items = this.items;
  items.delete(arg0);
  const items2 = this.items;
  const result = items2.set(arg0, arg1);
  if (this.items.size > this.limit) {
    const oldestKeyResult = self.oldestKey();
    ({ items: items3, items: items4 } = self);
    const value = items3.get(oldestKeyResult);
    items4.delete(oldestKeyResult);
    items = [oldestKeyResult, value];
    return items;
  }
};
prototype["delete"] = function delete(arg0) {
  const items = this.items;
  return items.delete(arg0);
};
prototype["oldestKey"] = function oldestKey() {
  const items = this.items;
  return items.keys().next().value;
};
let result = set.fileFinishedImporting("modules/app_database/util/Lru.tsx");

export { Lru };
// discord_app/modules/app_database/util/Lru.tsx
import size from "../../../../_runtime/metro/00002__.js";

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
  const items = this.items;
  const items1 = [...items.values()];
  return items1.reverse();
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
  const items = this.items;
  items.delete(arg0);
  const items2 = this.items;
  const result = items2.set(arg0, arg1);
  if (this.items.size > this.limit) {
    const oldestKeyResult = self.oldestKey();
    ({ items: items3, items: items4 } = self);
    value = items3.get(oldestKeyResult);
    items4.delete(oldestKeyResult);
    const items1 = [oldestKeyResult, value];
    return items1;
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
let result = size.fileFinishedImporting("modules/app_database/util/Lru.tsx");

export { Lru };
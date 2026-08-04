import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("next").fileFinishedImporting("modules/app_database/util/ExtendedMemoryLru.tsx");
class ExtendedMemoryLru {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    lru = new require("length").Lru(global);
    obj.primary = lru;
    lru1 = new require("length").Lru(arg1);
    obj.extended = lru1;
    return obj;
  }
}
const prototype = ExtendedMemoryLru.prototype;
Object.defineProperty(prototype, "totalLength", {
  get: function totalLength() {
    return this.primary.length + this.extended.length;
  },
  set: undefined
});
Object.defineProperty(prototype, "primaryCapacity", {
  get: function primaryCapacity() {
    return this.primary.capacity;
  },
  set: undefined
});
Object.defineProperty(prototype, "extendedCapacity", {
  get: function extendedCapacity() {
    return this.extended.capacity;
  },
  set: undefined
});
prototype["clear"] = function clear() {
  const primary = this.primary;
  primary.clear();
  const extended = this.extended;
  extended.clear();
};
prototype["has"] = function has(arg0) {
  const primary = this.primary;
  return primary.has(arg0);
};
prototype["hasExtended"] = function hasExtended(id) {
  const primary = this.primary;
  let hasItem = primary.has(id);
  if (!hasItem) {
    const extended = this.extended;
    hasItem = extended.has(id);
  }
  return hasItem;
};
prototype["get"] = function get(arg0) {
  const primary = this.primary;
  return primary.get(arg0);
};
prototype["put"] = function put(arg0, arg1) {
  const primary = this.primary;
  const putResult = primary.put(arg0, arg1);
  if (undefined !== putResult) {
    const extended = this.extended;
    extended.put(putResult[0], putResult[1]);
  }
};
prototype["delete"] = function delete(arg0) {
  const primary = this.primary;
  let deleteResult = primary.delete(arg0);
  const extended = this.extended;
  this.upstreamItems();
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  return deleteResult;
};
prototype["upstreamItems"] = function upstreamItems() {
  const self = this;
  if (this.canUpstreamItems()) {
    const extended = self.extended;
    const entries = extended.entries();
    const obj = entries[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp6 = callback;
      let tmp7 = callback(tmp4, 2);
      let first = tmp7[0];
      let primary = self.primary;
      let putResult = primary.put(first, tmp7[1]);
      let extended2 = self.extended;
      let deleteResult = extended2.delete(first);
      if (self.canUpstreamItems()) {
        continue;
      } else {
        let tmp11 = obj;
        obj.return();
        break;
      }
      break;
    }
  }
};
prototype["canUpstreamItems"] = function canUpstreamItems() {
  let tmp = this.primary.length < this.primary.capacity;
  if (tmp) {
    tmp = this.extended.length > 0;
  }
  return tmp;
};
prototype["entries"] = function entries() {
  const primary = this.primary;
  return primary.entries();
};
prototype["keys"] = function keys() {
  const primary = this.primary;
  return primary.keys();
};
prototype["values"] = function values() {
  const primary = this.primary;
  return primary.values();
};
prototype["allEntries"] = function allEntries() {
  const extended = this.extended;
  const primary = this.primary;
  const entries = extended.entries();
  return importAll(6850).chain(entries, primary.entries());
};
prototype["allKeys"] = function allKeys() {
  const extended = this.extended;
  const primary = this.primary;
  const keys = extended.keys();
  return importAll(6850).chain(keys, primary.keys());
};
prototype["allValues"] = function allValues() {
  const extended = this.extended;
  const primary = this.primary;
  const values = extended.values();
  return importAll(6850).chain(values, primary.values());
};

export { ExtendedMemoryLru };
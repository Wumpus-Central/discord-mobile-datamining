let result = require("set").fileFinishedImporting("lib/CachedEntriesMap.tsx");
class CachedEntriesMap {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.version = 0;
    map = new Map();
    obj.data = map;
    obj = require("areArraysShallowlyEqual");
    obj.cachedValues = obj.cachedFunction(() => {
      const data = obj.data;
      return Array.from(data.values());
    });
    obj2 = require("areArraysShallowlyEqual");
    obj.cachedKeys = obj2.cachedFunction(() => {
      const data = obj.data;
      return Array.from(data.keys());
    });
    obj3 = require("areArraysShallowlyEqual");
    obj.cachedEntries = obj3.cachedFunction(() => {
      const data = obj.data;
      return Array.from(data.entries());
    });
    return obj;
  }
}
const prototype = CachedEntriesMap.prototype;
prototype["keys"] = function keys() {
  return this.cachedKeys(this.version);
};
prototype["values"] = function values() {
  return this.cachedValues(this.version);
};
prototype["entries"] = function entries() {
  return this.cachedEntries(this.version);
};
prototype["size"] = function size() {
  return this.data.size;
};
prototype["get"] = function get(arg0) {
  const data = this.data;
  return data.get(arg0);
};
prototype["set"] = function set(arg0, arg1) {
  const self = this;
  const data = this.data;
  if (data.get(arg0) !== arg1) {
    const data2 = self.data;
    const result = data2.set(arg0, arg1);
    self.version = self.version + 1;
  }
};
prototype["delete"] = function delete(arg0) {
  const self = this;
  const data = this.data;
  const deleteResult = data.delete(arg0);
  if (deleteResult) {
    self.version = self.version + 1;
  }
  return deleteResult;
};
prototype["clear"] = function clear() {
  const self = this;
  if (0 !== this.data.size) {
    const data = self.data;
    data.clear();
    self.version = self.version + 1;
  }
};

export default CachedEntriesMap;
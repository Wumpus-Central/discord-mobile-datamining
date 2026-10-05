// discord_app/lib/CachedEntriesMap.tsx
import FunctionUtils from "../utils/FunctionUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("lib/CachedEntriesMap.tsx");
class CachedEntriesMap {
  constructor() {
    const obj4 = Object.create(new.target.prototype);
    obj4.version = 0;
    obj4.data = new Map();
    new Map();
    const obj = FunctionUtils;
    obj4.cachedValues = obj.cachedFunction(() => {
      const data = obj4.data;
      return Array.from(data.values());
    });
    const obj2 = FunctionUtils;
    obj4.cachedKeys = obj2.cachedFunction(() => {
      const data = obj4.data;
      return Array.from(data.keys());
    });
    const obj3 = FunctionUtils;
    obj4.cachedEntries = obj3.cachedFunction(() => {
      const data = obj4.data;
      return Array.from(data.entries());
    });
    return obj4;
  }
  keys() {
    return this.cachedKeys(this.version);
  }
  values() {
    return this.cachedValues(this.version);
  }
  entries() {
    return this.cachedEntries(this.version);
  }
  size() {
    return this.data.size;
  }
  get(arg0) {
    const data = this.data;
    return data.get(arg0);
  }
  set(arg0, arg1) {
    const self = this;
    const data = this.data;
    if (data.get(arg0) !== arg1) {
      const data2 = self.data;
      const result = data2.set(arg0, arg1);
      self.version = self.version + 1;
    }
  }
  delete(arg0) {
    const self = this;
    const data = this.data;
    const deleteResult = data.delete(arg0);
    if (deleteResult) {
      self.version = self.version + 1;
    }
    return deleteResult;
  }
  clear() {
    const self = this;
    if (0 !== this.data.size) {
      const data = self.data;
      data.clear();
      self.version = self.version + 1;
    }
  }
}
const prototype = CachedEntriesMap.prototype;

export default CachedEntriesMap;

// _runtime/metro/12684__.js
import _readOnlyError from "00377__readOnlyError.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

class LRUMap {
  constructor(_maxSize) {
    _classCallCheck(this, LRUMap);
    this._maxSize = _maxSize;
    this._cache = new Map();
    new Map();
  }
}
let items = [, , , , , ,];
const obj = {
  key: "size",
  get() {
    return this._cache.size;
  },
};
items[0] = obj;
items[1] = {
  key: "get",
  value: function get(arg0) {
    const self = this;
    const _cache = this._cache;
    const value = _cache.get(arg0);
    if (undefined !== value) {
      const _cache2 = self._cache;
      _cache2.delete(arg0);
      const _cache3 = self._cache;
      const result = _cache3.set(arg0, value);
      return value;
    }
  },
};
items[2] = {
  key: "set",
  value: function set(arg0, arg1) {
    let _cache;
    let _cache2;
    const self = this;
    if (this._cache.size >= this._maxSize) {
      ({ _cache, _cache: _cache2 } = self);
      const _delete = _cache.delete;
      const iter = _cache2.keys();
      _delete(iter.next().value);
    }
    const _cache3 = self._cache;
    const result = _cache3.set(arg0, arg1);
  },
};
items[3] = {
  key: "remove",
  value: function remove(arg0) {
    const _cache = this._cache;
    const value = _cache.get(arg0);
    if (value) {
      const _cache2 = this._cache;
      _cache2.delete(arg0);
    }
    return value;
  },
};
items[4] = {
  key: "clear",
  value: function clear() {
    const _cache = this._cache;
    _cache.clear();
  },
};
items[5] = {
  key: "keys",
  value: function keys() {
    const _cache = this._cache;
    return Array.from(_cache.keys());
  },
};
items[6] = {
  key: "values",
  value: function values() {
    const items = [];
    const _cache = this._cache;
    const item = _cache.forEach((item) => items.push(item));
    return items;
  },
};
const LRUMap_export = _createClass(LRUMap, items);

export { LRUMap_export as LRUMap };

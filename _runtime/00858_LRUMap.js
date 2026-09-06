// _runtime/00858_LRUMap.js
import _readOnlyError from "metro/00377__readOnlyError.js";
import LRUMap from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LRUMap {
  constructor(arg0) {
    tmp = LRUMap(this, LRUMap);
    this._maxSize = global;
    map = new Map();
    this._cache = map;
    return;
  }
}
let items = [
  {
    key: "size",
    get() {
      return this._cache.size;
    },
  },
  {
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
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      const self = this;
      if (this._cache.size >= this._maxSize) {
        const _cache = self._cache;
        const _cache2 = self._cache;
        _cache2.delete(_cache.keys().next().value);
        const iter = _cache.keys();
      }
      const _cache3 = self._cache;
      const result = _cache3.set(arg0, arg1);
    },
  },
  {
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
  },
  {
    key: "clear",
    value: function clear() {
      const _cache = this._cache;
      _cache.clear();
    },
  },
  {
    key: "keys",
    value: function keys() {
      const _cache = this._cache;
      return Array.from(_cache.keys());
    },
  },
  {
    key: "values",
    value: function values() {
      const items = [];
      const _cache = this._cache;
      const item = _cache.forEach((arg0) => items.push(arg0));
      return items;
    },
  },
];

export const LRUMap = _createClass(LRUMap, items);

// _runtime/12628__output.js
import $ZodRegistry from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

$ZodRegistry = function $ZodRegistry(arg0, $ZodRegistry) {
  $ZodRegistry(this, $ZodRegistry);
  const weakMap = new WeakMap();
  this._map = weakMap;
  this._idmap = new Map();
};
const items = [
  {
    key: "add",
    value: function add(arg0) {
      const self = this;
      const first = HermesBuiltin.copyRestArgs()[0];
      const _map = this._map;
      const result = _map.set(arg0, first);
      let tmp3 = first;
      if (first) {
        tmp3 = typeof first === "object";
      }
      if (tmp3) {
        tmp3 = "id" in first;
      }
      if (tmp3) {
        const _idmap = self._idmap;
        const result1 = _idmap.set(first.id, arg0);
      }
      return self;
    }
  },
  {
    key: "clear",
    value: function clear() {
      const obj = {};
      const weakMap = new WeakMap();
      obj._map = weakMap;
      obj._idmap = new Map();
      return obj;
    }
  },
  {
    key: "remove",
    value: function remove(arg0) {
      const self = this;
      const _map = this._map;
      const value = _map.get(arg0);
      let tmp2 = value;
      if (value) {
        tmp2 = typeof value === "object";
      }
      if (tmp2) {
        tmp2 = "id" in value;
      }
      if (tmp2) {
        const _idmap = self._idmap;
        _idmap.delete(value.id);
      }
      const _map2 = self._map;
      _map2.delete(arg0);
      return self;
    }
  },
  {
    key: "get",
    value: function get(_zod) {
      const self = this;
      const parent = _zod._zod.parent;
      if (parent) {
        let obj = self.get(parent);
        if (obj == null) {
          obj = {};
        }
        obj = {};
        const merged = Object.assign(obj);
        delete tmp2[tmp];
        obj1 = {};
        const merged1 = Object.assign(obj);
        const _map2 = self._map;
        const merged2 = Object.assign(_map2.get(_zod));
        const _Object = Object;
        let tmp13;
        if (Object.keys(obj1).length) {
          tmp13 = obj1;
        }
        return tmp13;
      } else {
        const _map = self._map;
        return _map.get(_zod);
      }
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      const _map = this._map;
      return _map.has(arg0);
    }
  }
];
const _moduleResult = _createClass($ZodRegistry, items);
if (globalThis.__zod_globalRegistry == null) {
  const tmpResult = new _moduleResult();
  tmp4.__zod_globalRegistry = tmpResult;
}

export const registry = function registry() {
  return new closure_1();
};
export const $output = Symbol("ZodOutput");
export const $input = Symbol("ZodInput");
export const $ZodRegistry = _moduleResult;
export const globalRegistry = globalThis.__zod_globalRegistry;
// _runtime/08698__output.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

export function $ZodRegistry() {
  _classCallCheck(this, $ZodRegistry);
  const weakMap = new WeakMap();
  this._map = weakMap;
  this._idmap = new Map();
  new Map();
}
const entry = {
  key: "add",
  value: function add(arg0) {
    const self = this;
    const first = HermesBuiltin.copyRestArgs()[0];
    const _map = this._map;
    const result = _map.set(arg0, first);
    const tmp3 = first && typeof first === "object" && "id" in first;
    if (tmp3) {
      const _idmap = self._idmap;
      const result1 = _idmap.set(first.id, arg0);
    }
    return self;
  },
};
const items = [
  entry,
  {
    key: "clear",
    value: function clear() {
      let weakMap;
      const obj = { _map: weakMap, _idmap: new Map() };
      weakMap = new WeakMap();
      new Map();
      return obj;
    },
  },
  {
    key: "remove",
    value: function remove(arg0) {
      const self = this;
      const _map = this._map;
      const value = _map.get(arg0);
      const tmp2 = value && typeof value === "object" && "id" in value;
      if (tmp2) {
        const _idmap = self._idmap;
        _idmap.delete(value.id);
      }
      const _map2 = self._map;
      _map2.delete(arg0);
      return self;
    },
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
        const obj3 = {};
        const merged = Object.assign(obj);
        delete obj2["id"];
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        const _map2 = self._map;
        const merged2 = Object.assign(_map2.get(_zod));
        const _Object = Object;
        let tmp11;
        if (Object.keys(obj5).length) {
          tmp11 = obj5;
        }
        return tmp11;
      } else {
        const _map = self._map;
        return _map.get(_zod);
      }
    },
  },
  {
    key: "has",
    value: function has(arg0) {
      const _map = this._map;
      return _map.has(arg0);
    },
  },
];
const _moduleResult = _createClass($ZodRegistry, items);
const map = _moduleResult;
if (globalThis.__zod_globalRegistry == null) {
  let self = this;
  const self2 = this;
  const tmpResult1 = new _moduleResult();
  tmp4.__zod_globalRegistry = tmpResult1;
}

export const registry = function registry() {
  const tmp = new map();
  return tmp;
};
export const $output = Symbol("ZodOutput");
export const $input = Symbol("ZodInput");
export const globalRegistry = globalThis.__zod_globalRegistry;

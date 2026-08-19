// _runtime/00066_map.js
import _modDef38 from "metro/00038__.js";

importDefault = arg2;
const dependencyMap = arg6;
const obj = {};
const map = new Map();
const map1 = new Map();
arg5.customBubblingEventTypes = obj;
arg5.customDirectEventTypes = obj;
arg5.register = function register(arg0, fn) {
  _modDef38(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  if (null !== fn) {
    str = typeof fn;
  }
  _modDef38(typeof fn === "function", "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = map.set(arg0, fn);
  return arg0;
};
arg5.get = function get(arg0) {
  let value = map1.get(arg0);
  if (null == value) {
    value = map.get(arg0);
    if (typeof value !== "function") {
      let str = "null";
      if (null !== value) {
        str = typeof value;
      }
      let str3 = "";
      if (typeof arg0[0] === "string") {
        str3 = "";
        if (obj3.test(arg0[0])) {
          str3 = " Make sure to start component names with a capital letter.";
        }
        obj3 = /[a-z]/;
      }
      _modDef38(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str3);
    }
    const value1Result = value();
    _modDef38(value1Result, "View config not found for component `%s`", arg0);
    ({ bubblingEventTypes, directEventTypes } = value1Result);
    if (null != bubblingEventTypes) {
      for (const key10028 in bubblingEventTypes) {
        if (null != map1[key10028]) {
          continue;
        } else {
          tmp19[key10028] = bubblingEventTypes[key10028];
          continue;
        }
        continue;
      }
    }
    if (null != directEventTypes) {
      for (const key10032 in directEventTypes) {
        if (null != map1[key10032]) {
          continue;
        } else {
          tmp21[key10032] = directEventTypes[key10032];
          continue;
        }
        continue;
      }
    }
    const result = map1.set(arg0, value1Result);
    const result1 = map.set(arg0, null);
    value = value1Result;
  }
  return value;
};
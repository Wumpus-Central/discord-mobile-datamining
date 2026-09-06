// === Module 66: customBubblingEventTypes ===

// Module 66 (customBubblingEventTypes)
import _modDef38 from "module_38" /* 38 */;

importDefault = arg2;
const dependencyMap = arg6;
let obj = {};
obj = {};
const map = new Map();
const map1 = new Map();

export const customBubblingEventTypes = obj;
export const customDirectEventTypes = obj;
export const register = function register(arg0, fn) {
  _modDef38(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  obj = map;
  if (null !== fn) {
    str = typeof fn;
  }
  _modDef38(typeof fn === "function", "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = obj.set(arg0, fn);
  return arg0;
};
export const get = function get(arg0) {
  value = map1.get(arg0);
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
        if (null != obj[key10028]) {
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
        if (null != obj[key10032]) {
          continue;
        } else {
          tmp21[key10032] = directEventTypes[key10032];
          continue;
        }
        continue;
      }
    }
    const result = obj.set(arg0, value1Result);
    const result1 = map.set(arg0, null);
    value = value1Result;
  }
  return value;
};
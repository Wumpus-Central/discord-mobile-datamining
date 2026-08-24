// === Module 66: map ===

// Module 66 (map)
const module = arg2;
const dependencyMap = arg6;
let obj = {};
obj = {};
const map = new Map();
const map1 = new Map();
arg5.customBubblingEventTypes = obj;
arg5.customDirectEventTypes = obj;
arg5.register = function register(arg0, fn) {
  module(38)(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  obj = map;
  const tmp = module(38);
  if (null !== fn) {
    str = typeof fn;
  }
  module(38)(typeof fn === "function", "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = obj.set(arg0, fn);
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
      module(38)(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str3);
      const tmp17 = module(38);
    }
    const value1Result = value();
    module(38)(value1Result, "View config not found for component `%s`", arg0);
    ({ bubblingEventTypes, directEventTypes } = value1Result);
    if (null != bubblingEventTypes) {
      for (const key10028 in bubblingEventTypes) {
        let tmp18 = key10028;
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
        let tmp20 = key10032;
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
    const obj2 = map;
  }
  return value;
};
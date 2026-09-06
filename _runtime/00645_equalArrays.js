// === Module 645: equalArrays ===

// Module 645 (equalArrays)
import cacheHas from "cacheHas" /* 650 */;


export default function equalArrays(key, value, arg2, fn, fn2, get) {
  _require = arg2;
  dependencyMap = fn;
  closure_2 = fn2;
  closure_3 = get;
  if (key.length != length2) {
    return false;
  }
  value = get.get(key);
  value = get.get(value);
  if (value) {
    if (value) {
      return value == value && value == key;
    }
  }
  let tmp4;
  if (2 & arg2) {
    tmp4 = new require("SetCache")();
  }
  closure_4 = tmp4;
  const result = get.set(key, value);
  const result1 = get.set(value, key);
  let num = 0;
  let flag2 = true;
  if (0 < key.length) {
    closure_5 = tmp12;
    while (!fn) {
      if (undefined !== tmp11) {
        flag2 = false;
      } else if (tmp4) {
        flag2 = false;
      } else if (tmp12 !== tmp13) {
        flag2 = false;
      }
      let sum = num + 1;
      num = sum;
      flag2 = true;
    }
    if (tmp) {
      let tmp22 = fn(tmp13, tmp12, tmp15, value, key, get);
    } else {
      tmp22 = fn(tmp12, tmp13, tmp15, key, value, get);
    }
  }
  get.delete(key);
  get.delete(value);
  return flag2;
};
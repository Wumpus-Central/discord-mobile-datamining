// _runtime/00656_equalArrays.js
import cacheHas from "00661_cacheHas.js";

const require = globalThis.__r;

export default function equalArrays(arg0, arg1, arg2, fn, fn2, get) {
  _require = arg2;
  dependencyMap = fn;
  closure_2 = fn2;
  closure_3 = get;
  if (arg0.length != length2) {
    return false;
  }
  value = get.get(arg0);
  value2 = get.get(arg1);
  if (value) {
    if (value2) {
      return value == arg1 && value2 == arg0;
    }
  }
  let tmp4;
  if (2 & arg2) {
    tmp4 = new require("SetCache")();
  }
  closure_4 = tmp4;
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let num = 0;
  let flag2 = true;
  if (0 < arg0.length) {
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
      let tmp22 = fn(tmp13, tmp12, tmp15, arg1, arg0, get);
    } else {
      tmp22 = fn(tmp12, tmp13, tmp15, arg0, arg1, get);
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag2;
}

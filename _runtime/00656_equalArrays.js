// _runtime/00656_equalArrays.js
import cacheHas from "00661_cacheHas.js";

const require = globalThis.__r;
let _require, dependencyMap;

export default function equalArrays(arg0, arg1, arg2, fn, fn2, get) {
  let closure_0;
  let tmp9;
  _require = arg2;
  dependencyMap = fn;
  let closure_2 = fn2;
  let closure_3 = get;
  const tmp = 1 & arg2;
  if (arg0.length != arg1.length) {
    return false;
  }
  const value = get.get(arg0);
  const value2 = get.get(arg1);
  if (value) {
    if (value2) {
      return value == arg1 && value2 == arg0;
    }
  }
  let tmp4;
  if (2 & arg2) {
    const self = this;
    const self2 = this;
    tmp4 = new require("SetCache")();
  }
  let closure_4 = tmp4;
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let num = 0;
  let flag2 = true;
  if (0 < arg0.length) {
    while (true) {
      let tmp10 = arg0[num];
      let closure_5 = tmp10;
      let tmp11 = arg1[num];
      let tmp12 = tmp9;
      let tmp13 = num;
      if (fn) {
        let tmp20;
        if (tmp) {
          tmp20 = fn(tmp11, tmp10, tmp13, arg1, arg0, get);
        } else {
          tmp20 = fn(tmp10, tmp11, tmp13, arg0, arg1, get);
        }
        tmp12 = tmp20;
      }
      if (undefined !== tmp12) {
        flag2 = false;
      } else if (tmp4) {
        flag2 = false;
      } else if (tmp10 !== tmp11) {
        flag2 = false;
        if (!fn2(tmp10, tmp11, arg2, fn, get)) {
          break;
        }
      }
      let sum = num + 1;
      tmp9 = tmp12;
      num = sum;
      flag2 = true;
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag2;
}

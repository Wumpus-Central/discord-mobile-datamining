// _runtime/00791_equalObjects.js
import getAllKeys from "00792_getAllKeys.js";


export default function equalObjects(key, closure_0, arg2, fn, fn2, get) {
  const arr = getAllKeys(key);
  if (arr.length != getAllKeys(_require).length) {
    if (!tmp) {
      return false;
    }
  }
  let diff = tmp2 - 1;
  let tmp4 = diff;
  if (+arr.length) {
    while (true) {
      let tmp5 = arr[diff];
      if (tmp) {
        let tmp8 = tmp5 in _require;
      } else {
        let call = hasOwnProperty.call;
        tmp8 = typeof call === "unknown" ? hasOwnProperty(tmp5) : call(_require, tmp5);
      }
      if (!tmp8) {
        break;
      } else {
        let tmp9 = +diff;
        diff = tmp9 - 1;
        tmp4 = diff;
      }
    }
    return false;
  }
  get.get(key);
  const value = get.get(_require);
  if (value) {
    if (value) {
      return value == _require && value == key;
    }
  }
  const result = get.set(key, _require);
  const result1 = get.set(_require, key);
  let sum = tmp4 + 1;
  let tmp16 = tmp;
  let tmp17 = tmp;
  let flag3 = true;
  if (sum < arr.length) {
    while (!fn) {
      let tmp38 = tmp15;
      if (undefined === tmp15) {
        let tmp39 = tmp19 === tmp20;
        if (!tmp39) {
          tmp39 = fn2(tmp19, tmp20, arg2, fn, get);
        }
        tmp38 = tmp39;
      }
      tmp17 = tmp16;
      flag3 = false;
      if (tmp38) {
        let tmp45 = tmp16;
        if (!tmp16) {
          tmp45 = "constructor" == tmp18;
        }
        let sum1 = sum + 1;
        tmp16 = tmp45;
        sum = sum1;
        tmp17 = tmp45;
        flag3 = true;
      }
    }
    if (tmp) {
      let tmp30 = fn(tmp20, tmp19, tmp18, _require, key, get);
    } else {
      tmp30 = fn(tmp19, tmp20, tmp18, key, _require, get);
    }
  }
  let flag4 = flag3;
  if (flag3) {
    flag4 = flag3;
    if (!tmp17) {
      const constructor = key.constructor;
      const constructor2 = _require.constructor;
      let tmp47 = constructor == constructor2 || !("constructor" in key) || !("constructor" in _require);
      if (!tmp47) {
        let tmp48 = typeof constructor === "function";
        if (typeof constructor === "function") {
          tmp48 = constructor instanceof constructor;
        }
        if (tmp48) {
          tmp48 = typeof constructor2 === "function";
        }
        if (tmp48) {
          tmp48 = constructor2 instanceof constructor2;
        }
        tmp47 = tmp48;
      }
      flag4 = flag3;
      if (!tmp47) {
        flag4 = false;
      }
    }
  }
  get.delete(key);
  get.delete(_require);
  return flag4;
};
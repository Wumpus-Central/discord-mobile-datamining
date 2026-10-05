// === Module 666: equalObjects ===

// Module 666 (equalObjects)
import getAllKeys from "getAllKeys" /* 667 */;


export default function equalObjects(arg0, arg1, arg2, fn, fn2, get) {
  let tmp14;
  const arr = getAllKeys(arg0);
  if (arr.length != getAllKeys(arg1).length) {
    if (!(1 & arg2)) {
      return false;
    }
  }
  let diff = tmp2 - 1;
  let tmp4 = diff;
  if (+arr.length) {
    while (true) {
      let callResult;
      let tmp5 = arr[diff];
      if (tmp) {
        callResult = tmp5 in arg1;
      } else {
        callResult = hasOwnProperty.call(arg1, tmp5);
      }
      if (!callResult) {
        break;
      } else {
        let tmp8 = +diff;
        diff = tmp8 - 1;
        tmp4 = diff;
      }
    }
    return false;
  }
  const value = get.get(arg0);
  const value2 = get.get(arg1);
  if (value) {
    if (value2) {
      return value == arg1 && value2 == arg0;
    }
  }
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let sum = tmp4 + 1;
  let tmp15 = tmp;
  let tmp16 = tmp;
  let flag3 = true;
  if (sum < arr.length) {
    while (true) {
      let tmp17 = arr[sum];
      let tmp18 = arg0[tmp17];
      let tmp19 = arg1[tmp17];
      let tmp20 = tmp14;
      if (fn) {
        let tmp29;
        if (tmp) {
          tmp29 = fn(tmp19, tmp18, tmp17, arg1, arg0, get);
        } else {
          tmp29 = fn(tmp18, tmp19, tmp17, arg0, arg1, get);
        }
        tmp20 = tmp29;
      }
      let tmp36 = tmp20;
      if (undefined === tmp20) {
        let tmp37 = tmp18 === tmp19;
        if (!tmp37) {
          tmp37 = fn2(tmp18, tmp19, arg2, fn, get);
        }
        tmp36 = tmp37;
      }
      tmp16 = tmp15;
      flag3 = false;
      if (!tmp36) {
        break;
      } else {
        let tmp43 = tmp15 || "constructor" == tmp17;
        let sum1 = sum + 1;
        tmp15 = tmp43;
        tmp14 = tmp20;
        sum = sum1;
        tmp16 = tmp43;
        flag3 = true;
        if (sum1 >= length) {
          break;
        }
      }
    }
  }
  let flag4 = flag3;
  if (flag4) {
    flag4 = flag3;
    if (!tmp16) {
      const constructor = arg0.constructor;
      const constructor2 = arg1.constructor;
      let tmp45 = constructor == constructor2 || !("constructor" in arg0) || !("constructor" in arg1);
      if (!tmp45) {
        let tmp46 = typeof constructor === "function";
        if (typeof constructor === "function") {
          tmp46 = constructor instanceof constructor;
        }
        if (tmp46) {
          tmp46 = typeof constructor2 === "function";
        }
        if (tmp46) {
          tmp46 = constructor2 instanceof constructor2;
        }
        tmp45 = tmp46;
      }
      flag4 = flag3;
      if (!tmp45) {
        flag4 = false;
      }
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag4;
};
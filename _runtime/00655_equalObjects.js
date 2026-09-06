// _runtime/00655_equalObjects.js
import getAllKeys from "00656_getAllKeys.js";

export default function equalObjects(arg0, arg1, arg2, arg3, arg4, get) {
  const arr = getAllKeys(arg0);
  if (arr.length != getAllKeys(arg1).length) {
    if (!tmp) {
      return false;
    }
  }
  let diff = tmp2 - 1;
  let tmp4 = diff;
  if (+arr.length) {
    while (true) {
      let tmp5 = arr[diff];
      let tmp6 = diff;
      if (tmp) {
        let tmp8 = tmp5 in arg1;
      } else {
        let tmp7 = hasOwnProperty;
        let call = hasOwnProperty.call;
        tmp8 = typeof call === "unknown" ? tmp7(tmp5) : call(arg1, tmp5);
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
  let value = get.get(arg0);
  value = get.get(arg1);
  if (value) {
    if (value) {
      return value == arg1 && value == arg0;
    }
  }
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let sum = tmp4 + 1;
  let tmp16 = tmp;
  let tmp17 = tmp;
  let flag3 = true;
  if (sum < arr.length) {
    while (!arg3) {
      let tmp38 = tmp15;
      if (undefined === tmp15) {
        let tmp39 = tmp19 === tmp20;
        if (!tmp39) {
          let tmp40 = tmp19;
          let tmp41 = tmp20;
          let tmp42 = arg2;
          let tmp43 = arg3;
          let tmp44 = get;
          tmp39 = arg4(tmp19, tmp20, arg2, arg3, get);
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
      let tmp30 = arg3(tmp20, tmp19, tmp18, arg1, arg0, get);
    } else {
      tmp30 = arg3(tmp19, tmp20, tmp18, arg0, arg1, get);
    }
  }
  let flag4 = flag3;
  if (flag3) {
    flag4 = flag3;
    if (!tmp17) {
      const constructor = arg0.constructor;
      const constructor2 = arg1.constructor;
      let tmp47 = constructor == constructor2 || !("constructor" in arg0) || !("constructor" in arg1);
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
  get.delete(arg0);
  get.delete(arg1);
  return flag4;
}

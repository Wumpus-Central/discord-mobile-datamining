const result = require("set").fileFinishedImporting("utils/FunctionUtils.tsx");

export const areArraysShallowlyEqual = function areArraysShallowlyEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (arg0.length === arg1.length) {
          let num = 0;
          if (0 < arg0.length) {
            while (arg0[num] === arg1[num]) {
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
};
export function cachedFunction(arg0) {
  let closure_0 = arg0;
  let c1 = null;
  let c2 = null;
  return () => {
    const items = [...arguments];
    let flag = true;
    if (items !== items) {
      flag = false;
      if (null != arr2) {
        flag = false;
        if (null != items) {
          flag = false;
          if (arr2.length === items.length) {
            let num2 = 0;
            flag = true;
            if (0 < arr2.length) {
              flag = false;
              while (arr2[num2] === items[num2]) {
                let sum = num2 + 1;
                num2 = sum;
                flag = true;
                if (sum >= length) {
                  break;
                }
              }
            }
          }
        }
      }
    }
    if (!flag) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_2;
  };
}
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
    let tmp3 = key10003;
    if (!arg0.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
};
export const isPlainObjectEmpty = function isPlainObjectEmpty(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return false;
    }
  }
  return true;
};
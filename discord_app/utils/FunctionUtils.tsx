// === Module 1933: FunctionUtils ===

// Module 1933 (FunctionUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/FunctionUtils.tsx");

export const areArraysShallowlyEqual = function areArraysShallowlyEqual(found, found2) {
  if (found === found2) {
    return true;
  } else {
    if (null != found) {
      if (null != found2) {
        if (found.length === found2.length) {
          let num = 0;
          if (0 < found.length) {
            while (found[num] === found2[num]) {
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
export function cachedFunction(_computeCategories) {
  closure_0 = _computeCategories;
  let items = null;
  closure_2 = null;
  return () => {
    items = [...arguments];
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
      closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_2;
  };
}
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
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
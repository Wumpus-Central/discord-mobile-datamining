// _runtime/14264_isEmpty.js
import isArrayLike from "00518_isArrayLike.js";
import baseKeys from "00544_baseKeys.js";
import isPrototype from "00545_isPrototype.js";
import _mod645 from "metro/00645__.js";

export default function isEmpty(size) {
  if (null == size) {
    return true;
  } else {
    if (isArrayLike(size)) {
      return !size.length;
    }
    const tmp = _mod645(size);
    if ("[object Map]" != tmp) {
      if ("[object Set]" != tmp) {
        if (isPrototype(size)) {
          return !baseKeys(size).length;
        } else {
          for (const key10021 in size) {
            if (!hasOwnProperty.call(size, key10021)) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return !size.size;
  }
}

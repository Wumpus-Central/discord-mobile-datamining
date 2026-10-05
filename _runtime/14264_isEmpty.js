// === Module 14264: isEmpty ===

// Module 14264 (isEmpty)
import isArrayLike from "isArrayLike" /* 518 */;
import baseKeys from "baseKeys" /* 544 */;
import isPrototype from "isPrototype" /* 545 */;
import _mod645 from "module_645" /* 645 */;


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
};
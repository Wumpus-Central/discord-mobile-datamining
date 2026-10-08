// === Module 14106: ? ===

// Module 14106
import _mod518 from "module_518" /* 518 */;
import baseKeys from "baseKeys" /* 544 */;
import _mod545 from "module_545" /* 545 */;
import _mod645 from "module_645" /* 645 */;


export default function isEmpty(size) {
  if (null == size) {
    return true;
  } else {
    if (_mod518(size)) {
      return !size.length;
    }
    const tmp = _mod645(size);
    if ("[object Map]" != tmp) {
      if ("[object Set]" != tmp) {
        if (_mod545(size)) {
          return !baseKeys(size).length;
        } else {
          for (const key10021 in arg0) {
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let callResult = hasOwnProperty(key10021);
            } else {
              callResult = call(arg0, key10021);
            }
            if (!callResult) {
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
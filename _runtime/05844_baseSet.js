// === Module 5844: baseSet ===

// Module 5844 (baseSet)
import _mod521 from "module_521" /* 521 */;
import _mod543 from "module_543" /* 543 */;
import _mod588 from "module_588" /* 588 */;
import castPath from "castPath" /* 591 */;
import assignValue from "assignValue" /* 5812 */;


export default function baseSet(length, arg1, arg2, fn) {
  if (_mod521(length)) {
    const arr = castPath(arg1, length);
    if (null != arr.length) {
      let num2 = 0;
      let tmp17 = length;
      if (0 < length) {
        const tmp8 = _mod588(arr[num2]);
        while ("__proto__" !== tmp8) {
          if ("constructor" === tmp8) {
            break;
          } else if ("prototype" === tmp8) {
            break;
          } else {
            let tmp13 = arg2;
            if (num2 !== tmp4) {
              let tmp11 = tmp17[tmp8];
              let tmp12;
              if (fn) {
                tmp12 = fn(tmp11, tmp8, tmp17);
              }
              tmp13 = tmp12;
              if (undefined === tmp12) {
                if (_mod521(tmp11)) {
                  tmp13 = tmp11;
                } else {
                  let tmp14 = _mod543(arr[num2 + 1]) ? [] : {};
                }
              }
            }
            let tmp15 = assignValue(tmp17, tmp8, tmp13);
            let tmp16 = tmp17[tmp8];
            if (null != tmp16) {
              num2 = num2 + 1;
              tmp17 = tmp16;
            }
          }
        }
        return length;
      }
    }
    return arr.length;
  } else {
    return length;
  }
};
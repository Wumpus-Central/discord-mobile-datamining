// === Module 5125: ? ===

// Module 5125
import baseIteratee from "baseIteratee" /* 595 */;
import _mod5126 from "module_5126" /* 5126 */;
import baseFindIndex from "baseFindIndex" /* 5128 */;


export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return baseFindIndex(arg0, baseIteratee(arg1, 3), diff, true);
    } else {
      let sum = _mod5126(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp7 = max(sum, 0);
      } else {
        tmp7 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};
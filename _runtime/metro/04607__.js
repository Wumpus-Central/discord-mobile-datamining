// _runtime/metro/04607__.js
import baseIteratee from "../00584_baseIteratee.js";
import _mod4608 from "04608__.js";
import baseFindIndex from "../04610_baseFindIndex.js";

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
      let sum = _mod4608(arg2);
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
}

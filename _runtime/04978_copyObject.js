// === Module 4978: copyObject ===

// Module 4978 (copyObject)
import baseAssignValue from "baseAssignValue" /* 679 */;
import assignValue from "assignValue" /* 4979 */;


export default function copyObject(arg0, arg1, arg2, fn) {
  let num;
  const tmp = arg2 || {};
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = arg1[num];
    let tmp4;
    if (fn) {
      tmp4 = fn(tmp[tmp2], arg0[tmp2], tmp2, tmp, arg0);
    }
    if (undefined === tmp4) {
      tmp4 = arg0[tmp2];
    }
    if (arg2) {
      let tmp11 = assignValue(tmp, tmp2, tmp4);
    } else {
      let tmp10 = baseAssignValue(tmp, tmp2, tmp4);
    }
  }
  return tmp;
};
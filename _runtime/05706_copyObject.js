// === Module 5706: copyObject ===

// Module 5706 (copyObject)
import baseAssignValue from "baseAssignValue" /* 667 */;
import assignValue from "assignValue" /* 5707 */;


export default function copyObject(arg0, arg1, arg2, fn) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp3;
    if (fn) {
      tmp3 = fn(obj[tmp], arg0[tmp], tmp, obj, arg0);
    }
    if (undefined === tmp3) {
      tmp3 = arg0[tmp];
    }
    if (arg2) {
      let tmp10 = assignValue(obj, tmp, tmp3);
    } else {
      let tmp9 = baseAssignValue(obj, tmp, tmp3);
    }
  }
  return obj;
};
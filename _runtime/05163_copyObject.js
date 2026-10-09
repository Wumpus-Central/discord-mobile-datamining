// _runtime/05163_copyObject.js
import baseAssignValue from "00679_baseAssignValue.js";
import assignValue from "05164_assignValue.js";

export default function copyObject(resizeMode, arg1, height, fn) {
  let obj = height;
  if (!height) {
    obj = {};
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp3;
    if (fn) {
      tmp3 = fn(obj[tmp], resizeMode[tmp], tmp, obj, resizeMode);
    }
    if (undefined === tmp3) {
      tmp3 = resizeMode[tmp];
    }
    if (height) {
      let tmp10 = assignValue(obj, tmp, tmp3);
    } else {
      let tmp9 = baseAssignValue(obj, tmp, tmp3);
    }
  }
  return obj;
}

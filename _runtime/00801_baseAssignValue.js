// === Module 801: baseAssignValue ===

// Module 801 (baseAssignValue)
import getNative from "getNative" /* 802 */;


export default function baseAssignValue(arg0, arg1, arg2) {
  if ("__proto__" == arg1) {
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value: null, writable: true };
      obj[2] = arg2;
      getNative(arg0, arg1, obj);
    }
  }
  arg0[arg1] = arg2;
};
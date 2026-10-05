// === Module 679: baseAssignValue ===

// Module 679 (baseAssignValue)
import getNative from "getNative" /* 680 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      getNative(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
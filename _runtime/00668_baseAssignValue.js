// === Module 668: baseAssignValue ===

// Module 668 (baseAssignValue)
import _mod669 from "module_669" /* 669 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (_mod669) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      _mod669(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
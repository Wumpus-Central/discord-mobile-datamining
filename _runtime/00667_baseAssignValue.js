// === Module 667: baseAssignValue ===

// Module 667 (baseAssignValue)
import _mod668 from "module_668" /* 668 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (_mod668) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      _mod668(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
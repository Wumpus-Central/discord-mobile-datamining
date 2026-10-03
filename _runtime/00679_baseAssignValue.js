// === Module 679: baseAssignValue ===

// Module 679 (baseAssignValue)
import _mod680 from "module_680" /* 680 */;


export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (_mod680) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      _mod680(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
};
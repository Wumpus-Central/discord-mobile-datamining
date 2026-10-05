// _runtime/00679_baseAssignValue.js
import getNative from "00680_getNative.js";

export default function baseAssignValue(arg0, arg1, value) {
  if ("__proto__" == arg1) {
    if (getNative) {
      const obj = { configurable: true, enumerable: true, value, writable: true };
      getNative(arg0, arg1, obj);
    }
  }
  arg0[arg1] = value;
}

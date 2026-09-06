// === Module 15552: _defineProperty ===

// Module 15552 (_defineProperty)
import _mod43 from "module_43" /* 43 */;


export default function _defineProperty(arg0, arg1, value) {
  const tmp = _mod43(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = value;
  }
  return arg0;
};
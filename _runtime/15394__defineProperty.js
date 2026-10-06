// === Module 15394: _defineProperty ===

// Module 15394 (_defineProperty)
import toPropertyKey from "toPropertyKey" /* 43 */;


export default function _defineProperty(arg0, arg1, value) {
  const tmp = toPropertyKey(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = value;
  }
  return arg0;
};
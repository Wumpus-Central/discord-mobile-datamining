// _runtime/15552__defineProperty.js
import _mod43 from "metro/00043__.js";

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
}

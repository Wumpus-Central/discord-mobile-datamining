// === Module 6392: iterateValue ===

// Module 6392 (iterateValue)
import _mod6393 from "module_6393" /* 6393 */;
import iterateIterator from "iterateIterator" /* 6394 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod6393(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = iterateIterator(tmp3, arguments[1]);
    } else {
      tmp9 = iterateIterator(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
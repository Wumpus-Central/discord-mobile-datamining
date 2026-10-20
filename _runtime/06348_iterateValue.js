// === Module 6348: iterateValue ===

// Module 6348 (iterateValue)
import _mod6349 from "module_6349" /* 6349 */;
import iterateIterator from "iterateIterator" /* 6350 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod6349(arg0);
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
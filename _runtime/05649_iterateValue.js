// === Module 5649: iterateValue ===

// Module 5649 (iterateValue)
import _mod5650 from "module_5650" /* 5650 */;
import iterateIterator from "iterateIterator" /* 5651 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5650(arg0);
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
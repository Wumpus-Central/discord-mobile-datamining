// === Module 6345: iterateValue ===

// Module 6345 (iterateValue)
import _mod6346 from "module_6346" /* 6346 */;
import iterateIterator from "iterateIterator" /* 6347 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod6346(arg0);
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
// === Module 4972: iterateValue ===

// Module 4972 (iterateValue)
import _mod4973 from "module_4973" /* 4973 */;
import iterateIterator from "iterateIterator" /* 4974 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4973(arg0);
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
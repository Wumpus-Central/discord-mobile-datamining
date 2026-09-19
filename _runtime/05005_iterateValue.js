// === Module 5005: iterateValue ===

// Module 5005 (iterateValue)
import _mod5006 from "module_5006" /* 5006 */;
import iterateIterator from "iterateIterator" /* 5007 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5006(arg0);
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
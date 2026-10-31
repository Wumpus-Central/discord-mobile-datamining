// === Module 6463: iterateValue ===

// Module 6463 (iterateValue)
import _mod6464 from "module_6464" /* 6464 */;
import iterateIterator from "iterateIterator" /* 6465 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod6464(arg0);
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
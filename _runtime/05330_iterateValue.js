// === Module 5330: iterateValue ===

// Module 5330 (iterateValue)
import getIterator from "getIterator" /* 5331 */;
import iterateIterator from "iterateIterator" /* 5332 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = iterateIterator(tmp3, arguments[1]);
    } else {
      tmp7 = iterateIterator(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
// === Module 5090: iterateValue ===

// Module 5090 (iterateValue)
import _mod5091 from "module_5091" /* 5091 */;
import iterateIterator from "iterateIterator" /* 5092 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5091(arg0);
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
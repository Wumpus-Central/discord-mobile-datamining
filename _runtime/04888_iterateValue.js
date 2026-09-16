// === Module 4888: iterateValue ===

// Module 4888 (iterateValue)
import _mod4889 from "module_4889" /* 4889 */;
import iterateIterator from "iterateIterator" /* 4890 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4889(arg0);
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
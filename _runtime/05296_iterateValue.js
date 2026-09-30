// === Module 5296: iterateValue ===

// Module 5296 (iterateValue)
import _mod5297 from "module_5297" /* 5297 */;
import iterateIterator from "iterateIterator" /* 5298 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5297(arg0);
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
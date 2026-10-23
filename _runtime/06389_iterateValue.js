// === Module 6389: iterateValue ===

// Module 6389 (iterateValue)
import _mod6390 from "module_6390" /* 6390 */;
import iterateIterator from "iterateIterator" /* 6391 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod6390(arg0);
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
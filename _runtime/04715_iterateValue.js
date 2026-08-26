// === Module 4715: iterateValue ===

// Module 4715 (iterateValue)
import getIterator from "getIterator" /* 4716 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4717)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4717)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
// _runtime/05330_iterateValue.js
import getIterator from "05331_getIterator.js";
import iterateIterator from "05332_iterateIterator.js";

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
}

// _runtime/04889_iterateValue.js
import _mod4890 from "metro/04890__.js";
import iterateIterator from "04891_iterateIterator.js";

export default function iterateValue(arg0) {
  const tmp3 = _mod4890(arg0);
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
}

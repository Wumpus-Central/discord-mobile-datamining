// === Module 15574: ? ===

// Module 15574
import _mod15565 from "module_15565" /* 15565 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15573 from "module_15573" /* 15573 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15566(toString)) {
      const tmp4 = _mod15573(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15565;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15566(valueOf)) {
    const tmp8 = _mod15573(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15565;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15566(toString2)) {
      const tmp10 = _mod15573(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15565;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
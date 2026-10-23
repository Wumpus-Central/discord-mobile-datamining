// === Module 15554: ? ===

// Module 15554
import _mod15545 from "module_15545" /* 15545 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15553 from "module_15553" /* 15553 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15546(toString)) {
      const tmp4 = _mod15553(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15545;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15546(valueOf)) {
    const tmp8 = _mod15553(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15545;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15546(toString2)) {
      const tmp10 = _mod15553(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15545;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
// === Module 15841: ? ===

// Module 15841
import _mod15832 from "module_15832" /* 15832 */;
import _mod15833 from "module_15833" /* 15833 */;
import _mod15840 from "module_15840" /* 15840 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15833(toString)) {
      const tmp4 = _mod15840(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15832;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15833(valueOf)) {
    const tmp8 = _mod15840(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15832;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15833(toString2)) {
      const tmp10 = _mod15840(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15832;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
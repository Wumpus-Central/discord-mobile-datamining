// === Module 15615: ? ===

// Module 15615
import _mod15606 from "module_15606" /* 15606 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15614 from "module_15614" /* 15614 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15607(toString)) {
      const tmp4 = _mod15614(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15606;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15607(valueOf)) {
    const tmp8 = _mod15614(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15606;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15607(toString2)) {
      const tmp10 = _mod15614(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15606;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
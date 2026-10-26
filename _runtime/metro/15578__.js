// === Module 15578: ? ===

// Module 15578
import _mod15569 from "module_15569" /* 15569 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15577 from "module_15577" /* 15577 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15570(toString)) {
      const tmp4 = _mod15577(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15569;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15570(valueOf)) {
    const tmp8 = _mod15577(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15569;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15570(toString2)) {
      const tmp10 = _mod15577(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15569;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
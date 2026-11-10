// === Module 16502: ? ===

// Module 16502
import _mod16493 from "module_16493" /* 16493 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16501 from "module_16501" /* 16501 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16494(toString)) {
      const tmp4 = _mod16501(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16493;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16494(valueOf)) {
    const tmp8 = _mod16501(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16493;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16494(toString2)) {
      const tmp10 = _mod16501(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16493;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
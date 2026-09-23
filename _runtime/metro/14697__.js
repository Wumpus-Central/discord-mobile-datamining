// === Module 14697: ? ===

// Module 14697
import _mod14688 from "module_14688" /* 14688 */;
import _mod14689 from "module_14689" /* 14689 */;
import _mod14696 from "module_14696" /* 14696 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14689(toString)) {
      const tmp4 = _mod14696(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14688;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14689(valueOf)) {
    const tmp8 = _mod14696(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14688;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14689(toString2)) {
      const tmp10 = _mod14696(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14688;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
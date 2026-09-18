// === Module 14550: ? ===

// Module 14550
import _mod14541 from "module_14541" /* 14541 */;
import _mod14542 from "module_14542" /* 14542 */;
import _mod14549 from "module_14549" /* 14549 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14542(toString)) {
      const tmp4 = _mod14549(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14541;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14542(valueOf)) {
    const tmp8 = _mod14549(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14541;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14542(toString2)) {
      const tmp10 = _mod14549(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14541;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
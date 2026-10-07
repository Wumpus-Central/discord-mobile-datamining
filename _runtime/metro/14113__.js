// === Module 14113: ? ===

// Module 14113
import _mod14104 from "module_14104" /* 14104 */;
import _mod14105 from "module_14105" /* 14105 */;
import _mod14112 from "module_14112" /* 14112 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14105(toString)) {
      const tmp4 = _mod14112(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14104;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14105(valueOf)) {
    const tmp8 = _mod14112(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14104;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14105(toString2)) {
      const tmp10 = _mod14112(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14104;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
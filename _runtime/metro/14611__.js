// === Module 14611: ? ===

// Module 14611
import _mod14602 from "module_14602" /* 14602 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14610 from "module_14610" /* 14610 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14603(toString)) {
      const tmp4 = _mod14610(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14602;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14603(valueOf)) {
    const tmp8 = _mod14610(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14602;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14603(toString2)) {
      const tmp10 = _mod14610(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14602;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
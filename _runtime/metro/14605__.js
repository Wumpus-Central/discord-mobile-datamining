// === Module 14605: ? ===

// Module 14605
import _mod14596 from "module_14596" /* 14596 */;
import _mod14597 from "module_14597" /* 14597 */;
import _mod14604 from "module_14604" /* 14604 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14597(toString)) {
      const tmp4 = _mod14604(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14596;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14597(valueOf)) {
    const tmp8 = _mod14604(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14596;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14597(toString2)) {
      const tmp10 = _mod14604(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14596;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
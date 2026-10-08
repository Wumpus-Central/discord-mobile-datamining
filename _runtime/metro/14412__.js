// === Module 14412: ? ===

// Module 14412
import _mod14403 from "module_14403" /* 14403 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14411 from "module_14411" /* 14411 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14404(toString)) {
      const tmp4 = _mod14411(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14403;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14404(valueOf)) {
    const tmp8 = _mod14411(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14403;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14404(toString2)) {
      const tmp10 = _mod14411(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14403;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
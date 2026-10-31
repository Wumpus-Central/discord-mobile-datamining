// === Module 16158: ? ===

// Module 16158
import _mod16149 from "module_16149" /* 16149 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16157 from "module_16157" /* 16157 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16150(toString)) {
      const tmp4 = _mod16157(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16149;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16150(valueOf)) {
    const tmp8 = _mod16157(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16149;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16150(toString2)) {
      const tmp10 = _mod16157(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16149;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
// === Module 16162: ? ===

// Module 16162
import _mod16153 from "module_16153" /* 16153 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16161 from "module_16161" /* 16161 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16154(toString)) {
      const tmp4 = _mod16161(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16153;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16154(valueOf)) {
    const tmp8 = _mod16161(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16153;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16154(toString2)) {
      const tmp10 = _mod16161(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16153;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
// === Module 16305: ? ===

// Module 16305
import _mod16296 from "module_16296" /* 16296 */;
import _mod16297 from "module_16297" /* 16297 */;
import _mod16304 from "module_16304" /* 16304 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16297(toString)) {
      const tmp4 = _mod16304(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16296;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16297(valueOf)) {
    const tmp8 = _mod16304(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16296;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16297(toString2)) {
      const tmp10 = _mod16304(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16296;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
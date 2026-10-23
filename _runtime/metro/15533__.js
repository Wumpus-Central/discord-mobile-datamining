// === Module 15533: ? ===

// Module 15533
import _mod15524 from "module_15524" /* 15524 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15532 from "module_15532" /* 15532 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15525(toString)) {
      const tmp4 = _mod15532(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15524;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15525(valueOf)) {
    const tmp8 = _mod15532(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15524;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15525(toString2)) {
      const tmp10 = _mod15532(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15524;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
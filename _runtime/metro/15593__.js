// === Module 15593: ? ===

// Module 15593
import _mod15584 from "module_15584" /* 15584 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15592 from "module_15592" /* 15592 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15585(toString)) {
      const tmp4 = _mod15592(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15584;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15585(valueOf)) {
    const tmp8 = _mod15592(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15584;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15585(toString2)) {
      const tmp10 = _mod15592(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15584;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
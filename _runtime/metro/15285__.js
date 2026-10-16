// === Module 15285: ? ===

// Module 15285
import _mod15276 from "module_15276" /* 15276 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15284 from "module_15284" /* 15284 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15277(toString)) {
      const tmp4 = _mod15284(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15276;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15277(valueOf)) {
    const tmp8 = _mod15284(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15276;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15277(toString2)) {
      const tmp10 = _mod15284(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15276;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
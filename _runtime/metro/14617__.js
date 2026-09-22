// === Module 14617: ? ===

// Module 14617
import _mod14608 from "module_14608" /* 14608 */;
import _mod14609 from "module_14609" /* 14609 */;
import _mod14616 from "module_14616" /* 14616 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14609(toString)) {
      const tmp4 = _mod14616(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14608;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14609(valueOf)) {
    const tmp8 = _mod14616(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14608;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14609(toString2)) {
      const tmp10 = _mod14616(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14608;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
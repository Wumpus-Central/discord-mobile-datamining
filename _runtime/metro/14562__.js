// === Module 14562: ? ===

// Module 14562
import _mod14553 from "module_14553" /* 14553 */;
import _mod14554 from "module_14554" /* 14554 */;
import _mod14561 from "module_14561" /* 14561 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14554(toString)) {
      const tmp4 = _mod14561(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14553;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14554(valueOf)) {
    const tmp8 = _mod14561(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14553;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14554(toString2)) {
      const tmp10 = _mod14561(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14553;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
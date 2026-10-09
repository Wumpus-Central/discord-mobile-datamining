// === Module 14508: ? ===

// Module 14508
import _mod14499 from "module_14499" /* 14499 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14507 from "module_14507" /* 14507 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14500(toString)) {
      const tmp4 = _mod14507(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14499;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14500(valueOf)) {
    const tmp8 = _mod14507(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14499;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14500(toString2)) {
      const tmp10 = _mod14507(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14499;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
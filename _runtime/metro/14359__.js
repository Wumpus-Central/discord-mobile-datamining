// === Module 14359: ? ===

// Module 14359
import _mod14350 from "module_14350" /* 14350 */;
import _mod14351 from "module_14351" /* 14351 */;
import _mod14358 from "module_14358" /* 14358 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14351(toString)) {
      const tmp4 = _mod14358(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14350;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14351(valueOf)) {
    let tmp5Result = _mod14350;
    const tmp8 = _mod14358(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14351(toString2)) {
      tmp5Result = _mod14350;
      const tmp10 = _mod14358(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
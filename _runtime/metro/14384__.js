// === Module 14384: ? ===

// Module 14384
import _mod14375 from "module_14375" /* 14375 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14383 from "module_14383" /* 14383 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14376(toString)) {
      const tmp4 = _mod14383(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14375;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14376(valueOf)) {
    let tmp5Result = _mod14375;
    const tmp8 = _mod14383(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14376(toString2)) {
      tmp5Result = _mod14375;
      const tmp10 = _mod14383(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
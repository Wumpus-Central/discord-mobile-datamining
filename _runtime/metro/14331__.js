// === Module 14331: ? ===

// Module 14331
import _mod14322 from "module_14322" /* 14322 */;
import _mod14323 from "module_14323" /* 14323 */;
import _mod14330 from "module_14330" /* 14330 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14323(toString)) {
      const tmp4 = _mod14330(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14322;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14323(valueOf)) {
    let tmp5Result = _mod14322;
    const tmp8 = _mod14330(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14323(toString2)) {
      tmp5Result = _mod14322;
      const tmp10 = _mod14330(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
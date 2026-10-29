// === Module 16077: ? ===

// Module 16077
import _mod16068 from "module_16068" /* 16068 */;
import _mod16069 from "module_16069" /* 16069 */;
import _mod16076 from "module_16076" /* 16076 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16069(toString)) {
      const tmp4 = _mod16076(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16068;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16069(valueOf)) {
    const tmp8 = _mod16076(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16068;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16069(toString2)) {
      const tmp10 = _mod16076(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16068;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
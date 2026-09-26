// === Module 13823: ? ===

// Module 13823
import _mod13814 from "module_13814" /* 13814 */;
import _mod13815 from "module_13815" /* 13815 */;
import _mod13822 from "module_13822" /* 13822 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13815(toString)) {
      const tmp4 = _mod13822(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod13814;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13815(valueOf)) {
    const tmp8 = _mod13822(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod13814;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13815(toString2)) {
      const tmp10 = _mod13822(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod13814;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
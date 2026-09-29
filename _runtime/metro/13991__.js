// === Module 13991: ? ===

// Module 13991
import _mod13982 from "module_13982" /* 13982 */;
import _mod13983 from "module_13983" /* 13983 */;
import _mod13990 from "module_13990" /* 13990 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13983(toString)) {
      const tmp4 = _mod13990(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod13982;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13983(valueOf)) {
    const tmp8 = _mod13990(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod13982;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13983(toString2)) {
      const tmp10 = _mod13990(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod13982;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
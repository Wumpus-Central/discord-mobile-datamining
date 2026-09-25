// === Module 13867: ? ===

// Module 13867
import _mod13858 from "module_13858" /* 13858 */;
import _mod13859 from "module_13859" /* 13859 */;
import _mod13866 from "module_13866" /* 13866 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13859(toString)) {
      const tmp4 = _mod13866(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod13858;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13859(valueOf)) {
    const tmp8 = _mod13866(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod13858;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13859(toString2)) {
      const tmp10 = _mod13866(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod13858;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
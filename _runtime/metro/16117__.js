// _runtime/metro/16117__.js
import _mod16108 from "16108__.js";
import _mod16109 from "16109__.js";
import _mod16116 from "16116__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16109(toString)) {
      const tmp4 = _mod16116(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16108;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16109(valueOf)) {
    const tmp8 = _mod16116(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16108;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16109(toString2)) {
      const tmp10 = _mod16116(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16108;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/16407__.js
import _mod16398 from "16398__.js";
import _mod16399 from "16399__.js";
import _mod16406 from "16406__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16399(toString)) {
      const tmp4 = _mod16406(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16398;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16399(valueOf)) {
    const tmp8 = _mod16406(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16398;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16399(toString2)) {
      const tmp10 = _mod16406(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16398;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

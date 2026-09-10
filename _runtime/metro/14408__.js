// _runtime/metro/14408__.js
import _mod14399 from "14399__.js";
import _mod14400 from "14400__.js";
import _mod14407 from "14407__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14400(toString)) {
      const tmp4 = _mod14407(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14399;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14400(valueOf)) {
    let tmp5Result = _mod14399;
    const tmp8 = _mod14407(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14400(toString2)) {
      tmp5Result = _mod14399;
      const tmp10 = _mod14407(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

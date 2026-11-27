// _runtime/metro/15773__.js
import _mod15764 from "15764__.js";
import _mod15765 from "15765__.js";
import _mod15772 from "15772__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15765(toString)) {
      const tmp4 = _mod15772(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15764;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15765(valueOf)) {
    const tmp8 = _mod15772(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15764;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15765(toString2)) {
      const tmp10 = _mod15772(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15764;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

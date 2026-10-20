// _runtime/metro/15404__.js
import _mod15395 from "15395__.js";
import _mod15396 from "15396__.js";
import _mod15403 from "15403__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15396(toString)) {
      const tmp4 = _mod15403(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15395;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15396(valueOf)) {
    const tmp8 = _mod15403(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15395;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15396(toString2)) {
      const tmp10 = _mod15403(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15395;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

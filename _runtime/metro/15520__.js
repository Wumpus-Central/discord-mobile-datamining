// _runtime/metro/15520__.js
import _mod15511 from "15511__.js";
import _mod15512 from "15512__.js";
import _mod15519 from "15519__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15512(toString)) {
      const tmp4 = _mod15519(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15511;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15512(valueOf)) {
    const tmp8 = _mod15519(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15511;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15512(toString2)) {
      const tmp10 = _mod15519(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15511;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

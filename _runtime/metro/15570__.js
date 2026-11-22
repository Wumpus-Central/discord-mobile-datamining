// _runtime/metro/15570__.js
import _mod15561 from "15561__.js";
import _mod15562 from "15562__.js";
import _mod15569 from "15569__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15562(toString)) {
      const tmp4 = _mod15569(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15561;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15562(valueOf)) {
    const tmp8 = _mod15569(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15561;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15562(toString2)) {
      const tmp10 = _mod15569(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15561;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

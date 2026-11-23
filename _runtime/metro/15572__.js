// _runtime/metro/15572__.js
import _mod15563 from "15563__.js";
import _mod15564 from "15564__.js";
import _mod15571 from "15571__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15564(toString)) {
      const tmp4 = _mod15571(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15563;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15564(valueOf)) {
    const tmp8 = _mod15571(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15563;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15564(toString2)) {
      const tmp10 = _mod15571(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15563;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/15485__.js
import _mod15476 from "15476__.js";
import _mod15477 from "15477__.js";
import _mod15484 from "15484__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15477(toString)) {
      const tmp4 = _mod15484(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15476;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15477(valueOf)) {
    const tmp8 = _mod15484(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15476;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15477(toString2)) {
      const tmp10 = _mod15484(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15476;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/14018__.js
import _mod14009 from "14009__.js";
import _mod14010 from "14010__.js";
import _mod14017 from "14017__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14010(toString)) {
      const tmp4 = _mod14017(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14009;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14010(valueOf)) {
    const tmp8 = _mod14017(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14009;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14010(toString2)) {
      const tmp10 = _mod14017(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14009;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/14026__.js
import _mod14017 from "14017__.js";
import _mod14018 from "14018__.js";
import _mod14025 from "14025__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14018(toString)) {
      const tmp4 = _mod14025(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14017;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14018(valueOf)) {
    const tmp8 = _mod14025(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14017;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14018(toString2)) {
      const tmp10 = _mod14025(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14017;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

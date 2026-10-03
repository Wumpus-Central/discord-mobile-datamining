// _runtime/metro/14093__.js
import _mod14084 from "14084__.js";
import _mod14085 from "14085__.js";
import _mod14092 from "14092__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14085(toString)) {
      const tmp4 = _mod14092(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14084;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14085(valueOf)) {
    const tmp8 = _mod14092(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14084;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14085(toString2)) {
      const tmp10 = _mod14092(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14084;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/14420__.js
import _mod14411 from "14411__.js";
import _mod14412 from "14412__.js";
import _mod14419 from "14419__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14412(toString)) {
      const tmp4 = _mod14419(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14411;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14412(valueOf)) {
    const tmp8 = _mod14419(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14411;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14412(toString2)) {
      const tmp10 = _mod14419(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14411;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

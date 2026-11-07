// _runtime/metro/16465__.js
import _mod16456 from "16456__.js";
import _mod16457 from "16457__.js";
import _mod16464 from "16464__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16457(toString)) {
      const tmp4 = _mod16464(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16456;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16457(valueOf)) {
    const tmp8 = _mod16464(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16456;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16457(toString2)) {
      const tmp10 = _mod16464(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16456;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

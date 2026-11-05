// _runtime/metro/16420__.js
import _mod16411 from "16411__.js";
import _mod16412 from "16412__.js";
import _mod16419 from "16419__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16412(toString)) {
      const tmp4 = _mod16419(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16411;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16412(valueOf)) {
    const tmp8 = _mod16419(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16411;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16412(toString2)) {
      const tmp10 = _mod16419(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16411;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

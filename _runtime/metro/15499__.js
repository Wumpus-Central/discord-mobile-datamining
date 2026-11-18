// _runtime/metro/15499__.js
import _mod15490 from "15490__.js";
import _mod15491 from "15491__.js";
import _mod15498 from "15498__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15491(toString)) {
      const tmp4 = _mod15498(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15490;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15491(valueOf)) {
    const tmp8 = _mod15498(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15490;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15491(toString2)) {
      const tmp10 = _mod15498(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15490;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

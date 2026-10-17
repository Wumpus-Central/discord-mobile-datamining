// _runtime/metro/15354__.js
import _mod15345 from "15345__.js";
import _mod15346 from "15346__.js";
import _mod15353 from "15353__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15346(toString)) {
      const tmp4 = _mod15353(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15345;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15346(valueOf)) {
    const tmp8 = _mod15353(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15345;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15346(toString2)) {
      const tmp10 = _mod15353(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15345;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

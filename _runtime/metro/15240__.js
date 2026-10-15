// _runtime/metro/15240__.js
import _mod15231 from "15231__.js";
import _mod15232 from "15232__.js";
import _mod15239 from "15239__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15232(toString)) {
      const tmp4 = _mod15239(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15231;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15232(valueOf)) {
    const tmp8 = _mod15239(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15231;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15232(toString2)) {
      const tmp10 = _mod15239(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15231;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

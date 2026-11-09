// _runtime/metro/16475__.js
import _mod16466 from "16466__.js";
import _mod16467 from "16467__.js";
import _mod16474 from "16474__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16467(toString)) {
      const tmp4 = _mod16474(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16466;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16467(valueOf)) {
    const tmp8 = _mod16474(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16466;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16467(toString2)) {
      const tmp10 = _mod16474(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16466;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/16502__.js
import _mod16493 from "16493__.js";
import _mod16494 from "16494__.js";
import _mod16501 from "16501__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16494(toString)) {
      const tmp4 = _mod16501(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16493;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16494(valueOf)) {
    const tmp8 = _mod16501(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16493;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16494(toString2)) {
      const tmp10 = _mod16501(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16493;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

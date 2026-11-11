// _runtime/metro/16663__.js
import _mod16654 from "16654__.js";
import _mod16655 from "16655__.js";
import _mod16662 from "16662__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16655(toString)) {
      const tmp4 = _mod16662(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16654;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16655(valueOf)) {
    const tmp8 = _mod16662(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16654;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16655(toString2)) {
      const tmp10 = _mod16662(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16654;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

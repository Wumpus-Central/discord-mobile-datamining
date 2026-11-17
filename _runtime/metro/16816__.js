// _runtime/metro/16816__.js
import _mod16807 from "16807__.js";
import _mod16808 from "16808__.js";
import _mod16815 from "16815__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16808(toString)) {
      const tmp4 = _mod16815(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16807;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16808(valueOf)) {
    const tmp8 = _mod16815(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16807;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16808(toString2)) {
      const tmp10 = _mod16815(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16807;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

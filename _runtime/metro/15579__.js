// _runtime/metro/15579__.js
import _mod15570 from "15570__.js";
import _mod15571 from "15571__.js";
import _mod15578 from "15578__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15571(toString)) {
      const tmp4 = _mod15578(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15570;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15571(valueOf)) {
    const tmp8 = _mod15578(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15570;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15571(toString2)) {
      const tmp10 = _mod15578(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15570;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

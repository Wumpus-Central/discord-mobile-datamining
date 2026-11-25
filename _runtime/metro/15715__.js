// _runtime/metro/15715__.js
import _mod15706 from "15706__.js";
import _mod15707 from "15707__.js";
import _mod15714 from "15714__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15707(toString)) {
      const tmp4 = _mod15714(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15706;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15707(valueOf)) {
    const tmp8 = _mod15714(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15706;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15707(toString2)) {
      const tmp10 = _mod15714(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15706;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

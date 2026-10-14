// _runtime/metro/14944__.js
import _mod14935 from "14935__.js";
import _mod14936 from "14936__.js";
import _mod14943 from "14943__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14936(toString)) {
      const tmp4 = _mod14943(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14935;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14936(valueOf)) {
    const tmp8 = _mod14943(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14935;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14936(toString2)) {
      const tmp10 = _mod14943(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14935;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

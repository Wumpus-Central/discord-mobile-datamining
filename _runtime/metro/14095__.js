// _runtime/metro/14095__.js
import _mod14086 from "14086__.js";
import _mod14087 from "14087__.js";
import _mod14094 from "14094__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14087(toString)) {
      const tmp4 = _mod14094(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14086;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14087(valueOf)) {
    const tmp8 = _mod14094(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14086;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14087(toString2)) {
      const tmp10 = _mod14094(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14086;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

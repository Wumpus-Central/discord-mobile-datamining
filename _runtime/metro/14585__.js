// _runtime/metro/14585__.js
import _mod14576 from "14576__.js";
import _mod14577 from "14577__.js";
import _mod14584 from "14584__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14577(toString)) {
      const tmp4 = _mod14584(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14576;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14577(valueOf)) {
    const tmp8 = _mod14584(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14576;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14577(toString2)) {
      const tmp10 = _mod14584(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14576;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

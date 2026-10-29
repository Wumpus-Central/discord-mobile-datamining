// _runtime/metro/16077__.js
import _mod16068 from "16068__.js";
import _mod16069 from "16069__.js";
import _mod16076 from "16076__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16069(toString)) {
      const tmp4 = _mod16076(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16068;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16069(valueOf)) {
    const tmp8 = _mod16076(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16068;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16069(toString2)) {
      const tmp10 = _mod16076(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16068;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

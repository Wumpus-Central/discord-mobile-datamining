// _runtime/metro/16417__.js
import _mod16408 from "16408__.js";
import _mod16409 from "16409__.js";
import _mod16416 from "16416__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16409(toString)) {
      const tmp4 = _mod16416(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16408;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16409(valueOf)) {
    const tmp8 = _mod16416(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16408;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16409(toString2)) {
      const tmp10 = _mod16416(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16408;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

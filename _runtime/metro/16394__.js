// _runtime/metro/16394__.js
import _mod16385 from "16385__.js";
import _mod16386 from "16386__.js";
import _mod16393 from "16393__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16386(toString)) {
      const tmp4 = _mod16393(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16385;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16386(valueOf)) {
    const tmp8 = _mod16393(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16385;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16386(toString2)) {
      const tmp10 = _mod16393(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16385;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

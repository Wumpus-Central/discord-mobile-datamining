// _runtime/metro/16781__.js
import _mod16772 from "16772__.js";
import _mod16773 from "16773__.js";
import _mod16780 from "16780__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16773(toString)) {
      const tmp4 = _mod16780(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16772;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16773(valueOf)) {
    const tmp8 = _mod16780(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16772;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16773(toString2)) {
      const tmp10 = _mod16780(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16772;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

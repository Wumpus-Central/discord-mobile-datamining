// _runtime/metro/16658__.js
import _mod16649 from "16649__.js";
import _mod16650 from "16650__.js";
import _mod16657 from "16657__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16650(toString)) {
      const tmp4 = _mod16657(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod16649;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16650(valueOf)) {
    const tmp8 = _mod16657(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod16649;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16650(toString2)) {
      const tmp10 = _mod16657(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod16649;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

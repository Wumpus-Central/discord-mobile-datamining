// _runtime/metro/14706__.js
import _mod14697 from "14697__.js";
import _mod14698 from "14698__.js";
import _mod14705 from "14705__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14698(toString)) {
      const tmp4 = _mod14705(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14697;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14698(valueOf)) {
    const tmp8 = _mod14705(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14697;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14698(toString2)) {
      const tmp10 = _mod14705(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14697;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// _runtime/metro/13823__.js
import _mod13814 from "13814__.js";
import _mod13815 from "13815__.js";
import _mod13822 from "13822__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13815(toString)) {
      const tmp4 = _mod13822(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod13814;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13815(valueOf)) {
    const tmp8 = _mod13822(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod13814;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13815(toString2)) {
      const tmp10 = _mod13822(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod13814;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

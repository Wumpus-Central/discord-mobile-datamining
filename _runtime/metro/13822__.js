// _runtime/metro/13822__.js
import _mod13813 from "13813__.js";
import _mod13814 from "13814__.js";
import _mod13821 from "13821__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13814(toString)) {
      const tmp4 = _mod13821(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod13813;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13814(valueOf)) {
    const tmp8 = _mod13821(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod13813;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13814(toString2)) {
      const tmp10 = _mod13821(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod13813;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

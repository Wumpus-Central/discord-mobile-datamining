// _runtime/metro/15285__.js
import _mod15276 from "15276__.js";
import _mod15277 from "15277__.js";
import _mod15284 from "15284__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15277(toString)) {
      const tmp4 = _mod15284(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15276;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15277(valueOf)) {
    const tmp8 = _mod15284(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15276;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15277(toString2)) {
      const tmp10 = _mod15284(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15276;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

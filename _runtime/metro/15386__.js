// _runtime/metro/15386__.js
import _mod15377 from "15377__.js";
import _mod15378 from "15378__.js";
import _mod15385 from "15385__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15378(toString)) {
      const tmp4 = _mod15385(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15377;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15378(valueOf)) {
    const tmp8 = _mod15385(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15377;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15378(toString2)) {
      const tmp10 = _mod15385(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15377;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

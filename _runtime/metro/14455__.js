// _runtime/metro/14455__.js
import _mod14446 from "14446__.js";
import _mod14447 from "14447__.js";
import _mod14454 from "14454__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14447(toString)) {
      const tmp4 = _mod14454(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14446;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14447(valueOf)) {
    const tmp8 = _mod14454(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14446;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14447(toString2)) {
      const tmp10 = _mod14454(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14446;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

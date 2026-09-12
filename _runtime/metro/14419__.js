// _runtime/metro/14419__.js
import _mod14410 from "14410__.js";
import _mod14411 from "14411__.js";
import _mod14418 from "14418__.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14411(toString)) {
      const tmp4 = _mod14418(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14410;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14411(valueOf)) {
    let tmp5Result = _mod14410;
    const tmp8 = _mod14418(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14411(toString2)) {
      tmp5Result = _mod14410;
      const tmp10 = _mod14418(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

// === Module 14429: ? ===

// Module 14429
import _mod14420 from "module_14420" /* 14420 */;
import _mod14421 from "module_14421" /* 14421 */;
import _mod14428 from "module_14428" /* 14428 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14421(toString)) {
      const tmp4 = _mod14428(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod14420;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14421(valueOf)) {
    const tmp8 = _mod14428(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod14420;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14421(toString2)) {
      const tmp10 = _mod14428(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod14420;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
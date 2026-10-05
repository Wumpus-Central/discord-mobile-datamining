// === Module 14095: ? ===

// Module 14095
import _mod14086 from "module_14086" /* 14086 */;
import _mod14087 from "module_14087" /* 14087 */;
import _mod14094 from "module_14094" /* 14094 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14087(toString)) {
      const tmpResult = _mod14086;
      const tmp4 = _mod14094(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14087(valueOf)) {
    const tmp5Result = _mod14086;
    const tmp8 = _mod14094(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14087(toString2)) {
      const tmp5Result2 = _mod14086;
      const tmp10 = _mod14094(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
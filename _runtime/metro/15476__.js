// === Module 15476: ? ===

// Module 15476
import _mod15467 from "module_15467" /* 15467 */;
import _mod15468 from "module_15468" /* 15468 */;
import _mod15475 from "module_15475" /* 15475 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15468(toString)) {
      const tmp4 = _mod15475(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = _mod15467;
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15468(valueOf)) {
    const tmp8 = _mod15475(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = _mod15467;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15468(toString2)) {
      const tmp10 = _mod15475(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = _mod15467;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
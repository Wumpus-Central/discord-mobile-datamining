// === Module 14209: ? ===

// Module 14209
import all from "all" /* 14201 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (all(toString)) {
      const tmp4 = tmp(14208)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14200);
    }
  }
  const valueOf = arg0.valueOf;
  if (all(valueOf)) {
    let tmp5Result = tmp5(14200);
    const tmp8 = tmp5(14208)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14201)(toString2)) {
      tmp5Result = tmp5(14200);
      const tmp10 = tmp5(14208)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
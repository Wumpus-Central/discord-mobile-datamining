// === Module 13707: ? ===

// Module 13707
import all from "all" /* 13698 */;
import all2 from "all" /* 13699 */;
import call from "call" /* 13706 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (all2(toString)) {
      const tmp4 = call(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = all;
    }
  }
  const valueOf = arg0.valueOf;
  if (all2(valueOf)) {
    let tmp5Result = all;
    const tmp8 = call(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (all2(toString2)) {
      tmp5Result = all;
      const tmp10 = call(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
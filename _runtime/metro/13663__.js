// _runtime/metro/13663__.js
import { all } from "../13655_all.js";

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (all(toString)) {
      const tmp4 = tmp(13662)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13654);
    }
  }
  const valueOf = arg0.valueOf;
  if (all(valueOf)) {
    let tmp5Result = tmp5(13654);
    const tmp8 = tmp5(13662)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13655)(toString2)) {
      tmp5Result = tmp5(13654);
      const tmp10 = tmp5(13662)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
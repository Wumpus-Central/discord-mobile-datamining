// _runtime/metro/13873__.js
import all from "../13865_all.js";


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (all(toString)) {
      const tmp4 = tmp(13872)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13864);
    }
  }
  const valueOf = arg0.valueOf;
  if (all(valueOf)) {
    let tmp5Result = tmp5(13864);
    const tmp8 = tmp5(13872)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13865)(toString2)) {
      tmp5Result = tmp5(13864);
      const tmp10 = tmp5(13872)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13504) /* all */(toString)) {
      const tmp4 = tmp(13511)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13503);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13504) /* all */(valueOf)) {
    let tmp5Result = tmp5(13503);
    const tmp8 = tmp5(13511)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13504)(toString2)) {
      tmp5Result = tmp5(13503);
      const tmp10 = tmp5(13511)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
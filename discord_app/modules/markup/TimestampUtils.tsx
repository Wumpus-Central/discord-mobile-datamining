// discord_app/modules/markup/TimestampUtils.tsx
import set from "../../../_runtime/00002_set.js";
import setDefault from "../../utils/Durations.tsx";
import hooksDefault from "../../../_runtime/04074_hooks.js";
import resetCache from "../../utils/DateUtils.tsx";

let obj = {
  t(date) {
    return resetCache.dateFormat(date, "LT");
  },
  T(date) {
    return resetCache.dateFormat(date, "LTS");
  },
  d(date) {
    return resetCache.dateFormat(date, "L");
  },
  D(date) {
    return resetCache.dateFormat(date, "LL");
  },
  f(date) {
    return resetCache.dateFormat(date, "LLL");
  },
  F(date) {
    return resetCache.dateFormat(date, "LLLL");
  },
  s(date) {
    return resetCache.dateFormat(date, "L LT");
  },
  S(date) {
    return resetCache.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = hooksDefault.relativeTimeThreshold("s");
    obj = hooksDefault;
    const result1 = hooksDefault.relativeTimeThreshold("s", 60);
    const obj2 = hooksDefault;
    const result2 = hooksDefault.relativeTimeThreshold("ss");
    const obj3 = hooksDefault;
    const result3 = hooksDefault.relativeTimeThreshold("ss", -1);
    const obj4 = hooksDefault;
    const result4 = hooksDefault.relativeTimeThreshold("m");
    const obj5 = hooksDefault;
    const result5 = hooksDefault.relativeTimeThreshold("m", 60);
    try {
      let tmpResult = tmp(4074);
      let fromNowResult = tmpResult(toDate.toDate()).fromNow();
      tmpResult = tmp(4074);
      const result6 = tmpResult.relativeTimeThreshold("s", result);
      const tmpResultResult = tmpResult(toDate.toDate());
      const result7 = tmp(4074).relativeTimeThreshold("ss", result2);
      const tmpResult1 = tmp(4074);
      const result8 = tmp(4074).relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult3 = tmp(4074);
        fromNowResult = tmp(4074)(toDate.toDate()).fromNow();
        const tmpResult4Result = tmp(4074)(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {}
  },
};
Object.setPrototypeOf(obj, null);
const keys = Object.keys(obj);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = set.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export const TIMESTAMP_FORMATS = obj;
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(mention) {
  ({ timestamp, format } = mention);
  const tmp = hooksDefault;
  const tmpResult = tmp(Number(timestamp) * setDefault.Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp: null, format: null, parsed: null, full: null, formatted: null };
    obj[0] = timestamp;
    obj[1] = format;
    obj[2] = tmpResult;
    obj[3] = obj.F(tmpResult);
    obj[4] = f(tmpResult);
    return obj;
  } else {
    return null;
  }
  const NumberResult = Number(timestamp);
};
export const parseTimestamp = function parseTimestamp(arg0, arg1) {
  const tmp = hooksDefault;
  const tmpResult = tmp(Number(arg0) * setDefault.Millis.SECOND);
  let tmp3 = null;
  if (tmpResult.isValid()) {
    let f;
    if (null != arg1) {
      f = obj[arg1];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp: null, format: null, parsed: null, full: null, formatted: null };
    obj[0] = arg0;
    obj[1] = arg1;
    obj[2] = tmpResult;
    obj[3] = obj.F(tmpResult);
    obj[4] = f(tmpResult);
    tmp3 = obj;
  }
  return tmp3;
};
export const unparseTimestamp = function unparseTimestamp(timestamp, format) {
  if (null != format) {
    const _HermesInternal2 = HermesInternal;
    let combined = "<t:" + timestamp + ":" + format + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + timestamp + ">";
  }
  return combined;
};

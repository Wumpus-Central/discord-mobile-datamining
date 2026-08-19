// === Module 6826: TIMESTAMP_FORMATS ===

// Module 6826 (TIMESTAMP_FORMATS)
import obj132 from "obj132" /* 2 */;
import obj132Default from "obj132" /* 687 */;
import tDefault from "t" /* 3975 */;
import resetCache from "resetCache" /* 4063 */;

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
    const result = tDefault.relativeTimeThreshold("s");
    const result1 = tDefault.relativeTimeThreshold("s", 60);
    const result2 = tDefault.relativeTimeThreshold("ss");
    const result3 = tDefault.relativeTimeThreshold("ss", -1);
    const result4 = tDefault.relativeTimeThreshold("m");
    const result5 = tDefault.relativeTimeThreshold("m", 60);
    try {
      let tmpResult = tDefault;
      let fromNowResult = tmpResult(toDate.toDate()).fromNow();
      tmpResult = tDefault;
      const result6 = tmpResult.relativeTimeThreshold("s", result);
      const tmpResultResult = tmpResult(toDate.toDate());
      const result7 = tDefault.relativeTimeThreshold("ss", result2);
      const tmpResult1 = tDefault;
      const result8 = tDefault.relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult3 = tDefault;
        fromNowResult = tDefault(toDate.toDate()).fromNow();
        const tmpResult4Result = tDefault(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {
    }
  }
};
Object.setPrototypeOf(obj, null);
const keys = Object.keys(obj);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = obj132.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export const TIMESTAMP_FORMATS = obj;
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(arg0) {
  ({ timestamp, format } = arg0);
  const tmp = tDefault;
  const tmpResult = tmp(Number(timestamp) * obj132Default.Millis.SECOND);
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
  const tmp = tDefault;
  const tmpResult = tmp(Number(arg0) * obj132Default.Millis.SECOND);
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
export const unparseTimestamp = function unparseTimestamp(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "<t:" + arg0 + ":" + arg1 + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + arg0 + ">";
  }
  return combined;
};
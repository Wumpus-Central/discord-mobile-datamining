// discord_app/modules/markup/TimestampUtils.tsx
import set from "../../../_runtime/00002_set.js";
import setDefault from "../../utils/Durations.tsx";
import tDefault from "../../../_runtime/03975_t.js";
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
    const result = tDefault.relativeTimeThreshold("s");
    obj = tDefault;
    const result1 = tDefault.relativeTimeThreshold("s", 60);
    const obj2 = tDefault;
    const result2 = tDefault.relativeTimeThreshold("ss");
    const obj3 = tDefault;
    const result3 = tDefault.relativeTimeThreshold("ss", -1);
    const obj4 = tDefault;
    const result4 = tDefault.relativeTimeThreshold("m");
    const obj5 = tDefault;
    const result5 = tDefault.relativeTimeThreshold("m", 60);
    try {
      let tmpResult = tmp(3975);
      let fromNowResult = tmpResult(toDate.toDate()).fromNow();
      tmpResult = tmp(3975);
      const result6 = tmpResult.relativeTimeThreshold("s", result);
      const tmpResultResult = tmpResult(toDate.toDate());
      const result7 = tmp(3975).relativeTimeThreshold("ss", result2);
      const tmpResult1 = tmp(3975);
      const result8 = tmp(3975).relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult3 = tmp(3975);
        fromNowResult = tmp(3975)(toDate.toDate()).fromNow();
        const tmpResult4Result = tmp(3975)(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {
    }
  }
};
Object.setPrototypeOf(obj, null);
const keys = Object.keys(obj);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = set.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export const TIMESTAMP_FORMATS = obj;
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(arg0) {
  ({ timestamp, format } = arg0);
  const tmp = tDefault;
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
  const tmp = tDefault;
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
// === Module 8692: TimestampUtils ===

// Module 8692 (TimestampUtils)
import DurationsDefault from "Durations" /* 1089 */;
import _modDef2166 from "module_2166" /* 2166 */;
import DateUtils from "DateUtils" /* 4992 */;
import size from "module_2" /* 2 */;

const TIMESTAMP_FORMATS = {
  t(date) {
    return DateUtils.dateFormat(date, "LT");
  },
  T(date) {
    return DateUtils.dateFormat(date, "LTS");
  },
  d(date) {
    return DateUtils.dateFormat(date, "L");
  },
  D(date) {
    return DateUtils.dateFormat(date, "LL");
  },
  f(date) {
    return DateUtils.dateFormat(date, "LLL");
  },
  F(date) {
    return DateUtils.dateFormat(date, "LLLL");
  },
  s(date) {
    return DateUtils.dateFormat(date, "L LT");
  },
  S(date) {
    return DateUtils.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = _modDef2166.relativeTimeThreshold("s");
    const result1 = _modDef2166.relativeTimeThreshold("s", 60);
    const result2 = _modDef2166.relativeTimeThreshold("ss");
    const result3 = _modDef2166.relativeTimeThreshold("ss", -1);
    const result4 = _modDef2166.relativeTimeThreshold("m");
    const result5 = _modDef2166.relativeTimeThreshold("m", 60);
    try {
      const tmpResult = _modDef2166;
      let fromNowResult = _modDef2166(toDate.toDate()).fromNow();
      const tmpResultResult = _modDef2166(toDate.toDate());
      const result6 = _modDef2166.relativeTimeThreshold("s", result);
      const tmpResult5 = _modDef2166;
      const result7 = _modDef2166.relativeTimeThreshold("ss", result2);
      const tmpResult6 = _modDef2166;
      const result8 = _modDef2166.relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult8 = _modDef2166;
        fromNowResult = _modDef2166(toDate.toDate()).fromNow();
        const tmpResult4Result = _modDef2166(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {
    }
  }
};
Object.setPrototypeOf(TIMESTAMP_FORMATS, null);
const keys = Object.keys(TIMESTAMP_FORMATS);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = size.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export { TIMESTAMP_FORMATS };
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export function formatTimestampMention(mention) {
  ({ timestamp, format } = mention);
  const tmp = _modDef2166;
  const tmpResult = tmp(Number(timestamp) * DurationsDefault.Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: null, formatted: null };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    return obj;
  } else {
    return null;
  }
  const NumberResult = Number(timestamp);
}
export function parseTimestamp(timestamp, format) {
  const tmp = _modDef2166;
  const tmpResult = tmp(Number(timestamp) * DurationsDefault.Millis.SECOND);
  let tmp3 = null;
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: null, formatted: null };
    obj.full = obj.F(tmpResult);
    obj.formatted = f(tmpResult);
    tmp3 = obj;
  }
  return tmp3;
}
export function unparseTimestamp(timestamp, format) {
  if (null != format) {
    const _HermesInternal2 = HermesInternal;
    let combined = "<t:" + timestamp + ":" + format + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + timestamp + ">";
  }
  return combined;
}
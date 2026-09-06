// discord_app/modules/markup/TimestampUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import DateUtils from "../../utils/DateUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const result = _modDef4153.relativeTimeThreshold("s");
    const result1 = _modDef4153.relativeTimeThreshold("s", 60);
    const result2 = _modDef4153.relativeTimeThreshold("ss");
    const result3 = _modDef4153.relativeTimeThreshold("ss", -1);
    const result4 = _modDef4153.relativeTimeThreshold("m");
    const result5 = _modDef4153.relativeTimeThreshold("m", 60);
    try {
      let tmpResult = _modDef4153;
      let fromNowResult = tmpResult(toDate.toDate()).fromNow();
      tmpResult = _modDef4153;
      const result6 = tmpResult.relativeTimeThreshold("s", result);
      const tmpResultResult = tmpResult(toDate.toDate());
      const result7 = _modDef4153.relativeTimeThreshold("ss", result2);
      const tmpResult1 = _modDef4153;
      const result8 = _modDef4153.relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult3 = _modDef4153;
        fromNowResult = _modDef4153(toDate.toDate()).fromNow();
        const tmpResult4Result = _modDef4153(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {}
  },
};
Object.setPrototypeOf(TIMESTAMP_FORMATS, null);
const keys = Object.keys(TIMESTAMP_FORMATS);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = size.fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export { TIMESTAMP_FORMATS };
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(mention) {
  ({ timestamp, format } = mention);
  const tmp = _modDef4153;
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
};
export const parseTimestamp = function parseTimestamp(timestamp, format) {
  const tmp = _modDef4153;
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

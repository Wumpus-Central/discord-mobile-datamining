// discord_app/modules/markup/TimestampUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef4461 from "../../../_runtime/metro/04461__.js";
import DateUtils from "../../utils/DateUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const TIMESTAMP_FORMATS = {
  t(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "LT");
  },
  T(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "LTS");
  },
  d(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "L");
  },
  D(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "LL");
  },
  f(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "LLL");
  },
  F(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "LLLL");
  },
  s(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "L LT");
  },
  S(date) {
    const obj = DateUtils;
    return obj.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const obj = _modDef4461;
    const result = obj.relativeTimeThreshold("s");
    const obj2 = _modDef4461;
    const result1 = obj2.relativeTimeThreshold("s", 60);
    const obj3 = _modDef4461;
    const result2 = obj3.relativeTimeThreshold("ss");
    const obj4 = _modDef4461;
    const result3 = obj4.relativeTimeThreshold("ss", -1);
    const obj5 = _modDef4461;
    const result4 = obj5.relativeTimeThreshold("m");
    const obj6 = _modDef4461;
    const result5 = obj6.relativeTimeThreshold("m", 60);
    let fromNowResult = null;
    try {
      const tmpResult = _modDef4461;
      const tmpResultResult = tmpResult(toDate.toDate());
      fromNowResult = tmpResultResult.fromNow();
    } catch (err) {}
    const tmpResult5 = _modDef4461;
    const result6 = tmpResult5.relativeTimeThreshold("s", result);
    const tmpResult6 = _modDef4461;
    const result7 = tmpResult6.relativeTimeThreshold("ss", result2);
    const tmpResult7 = _modDef4461;
    const result8 = tmpResult7.relativeTimeThreshold("m", result4);
    if (fromNowResult == null) {
      const tmpResult8 = _modDef4461;
      const tmpResult4Result = tmpResult8(toDate.toDate());
      fromNowResult = tmpResult4Result.fromNow();
    }
    return fromNowResult;
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
  let format;
  let obj;
  let timestamp;
  ({ timestamp, format } = mention);
  const tmp = _modDef4461;
  const NumberResult = Number(timestamp);
  const tmpResult = tmp(NumberResult * DurationsDefault.Millis.SECOND);
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: obj.F(tmpResult), formatted: f(tmpResult) };
    return obj;
  } else {
    return null;
  }
};
export const parseTimestamp = function parseTimestamp(timestamp, format) {
  let obj;
  const tmp = _modDef4461;
  const NumberResult = Number(timestamp);
  const tmpResult = tmp(NumberResult * DurationsDefault.Millis.SECOND);
  let tmp3 = null;
  if (tmpResult.isValid()) {
    let f;
    if (null != format) {
      f = obj[format];
    }
    if (null == f) {
      f = obj.f;
    }
    obj = { timestamp, format, parsed: tmpResult, full: obj.F(tmpResult), formatted: f(tmpResult) };
    tmp3 = obj;
  }
  return tmp3;
};
export const unparseTimestamp = function unparseTimestamp(timestamp, format) {
  let combined;
  if (null != format) {
    const _HermesInternal2 = HermesInternal;
    combined = "<t:" + timestamp + ":" + format + ">";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "<t:" + timestamp + ">";
  }
  return combined;
};

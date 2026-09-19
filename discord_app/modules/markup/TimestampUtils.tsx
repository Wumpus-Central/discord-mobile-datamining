// discord_app/modules/markup/TimestampUtils.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef4348 from "../../../_runtime/metro/04348__.js";
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
    const result = _modDef4348.relativeTimeThreshold("s");
    const result1 = _modDef4348.relativeTimeThreshold("s", 60);
    const result2 = _modDef4348.relativeTimeThreshold("ss");
    const result3 = _modDef4348.relativeTimeThreshold("ss", -1);
    const result4 = _modDef4348.relativeTimeThreshold("m");
    const result5 = _modDef4348.relativeTimeThreshold("m", 60);
    try {
      const tmpResult = _modDef4348;
      let fromNowResult = _modDef4348(toDate.toDate()).fromNow();
      const tmpResultResult = _modDef4348(toDate.toDate());
      const result6 = _modDef4348.relativeTimeThreshold("s", result);
      const tmpResult5 = _modDef4348;
      const result7 = _modDef4348.relativeTimeThreshold("ss", result2);
      const tmpResult6 = _modDef4348;
      const result8 = _modDef4348.relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult8 = _modDef4348;
        fromNowResult = _modDef4348(toDate.toDate()).fromNow();
        const tmpResult4Result = _modDef4348(toDate.toDate());
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
  const tmp = _modDef4348;
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
  const tmp = _modDef4348;
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

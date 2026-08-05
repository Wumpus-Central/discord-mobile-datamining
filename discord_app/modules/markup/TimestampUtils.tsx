// discord_app/modules/markup/TimestampUtils.tsx
let obj = {
  t(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "LT");
  },
  T(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "LTS");
  },
  d(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "L");
  },
  D(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "LL");
  },
  f(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "LLL");
  },
  F(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "LLLL");
  },
  s(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "L LT");
  },
  S(date) {
    return require("../../utils/DateUtils.tsx") /* resetCache */.dateFormat(date, "L LTS");
  },
  R(toDate) {
    const result = require("../../../_runtime/03867_t.js").relativeTimeThreshold("s");
    const obj = require("../../../_runtime/03867_t.js");
    const result1 = require("../../../_runtime/03867_t.js").relativeTimeThreshold("s", 60);
    const obj2 = require("../../../_runtime/03867_t.js");
    const result2 = require("../../../_runtime/03867_t.js").relativeTimeThreshold("ss");
    const obj3 = require("../../../_runtime/03867_t.js");
    const result3 = require("../../../_runtime/03867_t.js").relativeTimeThreshold("ss", -1);
    const obj4 = require("../../../_runtime/03867_t.js");
    const result4 = require("../../../_runtime/03867_t.js").relativeTimeThreshold("m");
    const obj5 = require("../../../_runtime/03867_t.js");
    const result5 = require("../../../_runtime/03867_t.js").relativeTimeThreshold("m", 60);
    try {
      let tmpResult = tmp(3867);
      let fromNowResult = tmpResult(toDate.toDate()).fromNow();
      tmpResult = tmp(3867);
      const result6 = tmpResult.relativeTimeThreshold("s", result);
      const tmpResultResult = tmpResult(toDate.toDate());
      const result7 = tmp(3867).relativeTimeThreshold("ss", result2);
      const tmpResult1 = tmp(3867);
      const result8 = tmp(3867).relativeTimeThreshold("m", result4);
      if (fromNowResult == null) {
        const tmpResult3 = tmp(3867);
        fromNowResult = tmp(3867)(toDate.toDate()).fromNow();
        const tmpResult4Result = tmp(3867)(toDate.toDate());
      }
      return fromNowResult;
    } catch (err) {
    }
  }
};
Object.setPrototypeOf(obj, null);
const keys = Object.keys(obj);
const regExp = new RegExp("^<t:(-?\\d{1,17})(?::(" + keys.join("|") + "))?>");
let result = require("set").fileFinishedImporting("modules/markup/TimestampUtils.tsx");

export const TIMESTAMP_FORMATS = obj;
export const DEFAULT_TIMESTAMP_FORMAT = "f";
export const TIMESTAMP_REGEX = regExp;
export const formatTimestampMention = function formatTimestampMention(arg0) {
  let format;
  let timestamp;
  ({ timestamp, format } = arg0);
  const tmp = require("../../../_runtime/03867_t.js");
  const tmpResult = tmp(Number(timestamp) * require("../../utils/Durations.tsx").Millis.SECOND);
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
  const tmp = require("../../../_runtime/03867_t.js");
  const tmpResult = tmp(Number(arg0) * require("../../utils/Durations.tsx").Millis.SECOND);
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
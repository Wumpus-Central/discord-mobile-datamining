// === Module 13286: useFPDurationLeft ===

// Module 13286 (useFPDurationLeft)
import react from "react" /* 576 */;
import intl from "intl" /* 1126 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import DateUtils from "DateUtils" /* 4558 */;
import useCountdownDefault from "useCountdown" /* 6961 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function roundFPCountdownUnits(arg0) {
  let num7;
  const time = {};
  const merged = Object.assign(arg0);
  if (time.seconds > 0) {
    time.minutes = time.minutes + 1;
    time.seconds = 0;
  }
  if (60 === time.minutes) {
    time.hours = time.hours + 1;
    time.minutes = 0;
  }
  if (24 === time.hours) {
    time.days = time.days + 1;
    time.hours = 0;
  }
  if (time.days > 0) {
    let days;
    if (time.hours > 0) {
      days = time.days + 1;
    } else {
      days = time.days;
    }
    const time1 = { days, hours: 0, minutes: 0, seconds: 0 };
    return time1;
  } else if (time.hours > 0) {
    let hours;
    let time2;
    if (time.minutes > 45) {
      hours = time.hours + 1;
    } else {
      hours = time.hours;
    }
    if (hours > 11) {
      time2 = { days: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      time2 = { days: 0, hours, minutes: 0, seconds: 0 };
    }
    return time2;
  } else if (time.minutes > 0) {
    let num5 = 0;
    if (time.minutes > 45) {
      num5 = 1;
    }
    const time3 = { days: 0, hours: num5, minutes: num7, seconds: 0 };
    num7 = 0;
    if (1 !== num5) {
      num7 = time.minutes;
    }
    return time3;
  } else {
    let time4 = time;
    if (time.seconds > 0) {
      time4 = { days: 0, hours: 0, minutes: 1, seconds: 0 };
    }
    return time4;
  }
}
const CountDownMessageTypes = { SHORT_TIME_LEFT: 0, [0]: "SHORT_TIME_LEFT", LONG_TIME_LEFT: 1, [1]: "LONG_TIME_LEFT", ENDS_IN: 2, [2]: "ENDS_IN", SHORT_TIME: 3, [3]: "SHORT_TIME", CREDITS_ENDS_IN: 4, [4]: "CREDITS_ENDS_IN" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(toDate, arg1) {
  let time4;
  const obj = react;
  const cResult = obj.c(2);
  if (obj.SHORT_TIME_LEFT === arg1) {
    const time = { days: intl.t["/wnvqA"], hours: intl.t.Jsq0XN, minutes: intl.t["SBd+Bs"] };
    time4 = time;
  } else if (obj.LONG_TIME_LEFT === arg1) {
    const time1 = { days: intl.t.UD5nn5, hours: intl.t.Hg8Fee, minutes: intl.t.XSbQZZ };
    time4 = time1;
  } else if (obj.ENDS_IN === arg1) {
    const time2 = { days: intl.t.rLqNad, hours: intl.t.d1LvCA, minutes: intl.t.Z2LX7K };
    time4 = time2;
  } else if (obj.CREDITS_ENDS_IN === arg1) {
    const time3 = { days: intl.t.xQ3zuN, hours: intl.t.SFU7QN, minutes: intl.t.Y4FNdL };
    time4 = time3;
  } else if (obj.SHORT_TIME === arg1) {
    time4 = { days: intl.t.fYmirx, hours: intl.t["C3RO+g"], minutes: intl.t.r77oHc };
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
    throw error;
  }
  if (cResult[0] !== toDate) {
    cResult[0] = toDate;
    cResult[1] = toDate.toDate();
    const toDateResult = toDate.toDate();
  }
  let str3 = "";
  try {
    const tmpResult = DateUtils;
    str3 = tmpResult.unitsAsStrings(tmp11, time4);
  } catch (err) {
    const tmp10Result = SentryUtilsDefault;
    tmp10Result.captureMessage("Error trying to format string for fractional nitro duration pill");
  }
  return str3;
}) : (function(arg0, arg1) {
  let time4;
  let tmp7;
  if (obj.SHORT_TIME_LEFT === arg1) {
    const time = { days: intl.t["/wnvqA"], hours: intl.t.Jsq0XN, minutes: intl.t["SBd+Bs"] };
    time4 = time;
    tmp7 = require;
  } else if (obj.LONG_TIME_LEFT === arg1) {
    const time1 = { days: intl.t.UD5nn5, hours: intl.t.Hg8Fee, minutes: intl.t.XSbQZZ };
    time4 = time1;
    tmp7 = require;
  } else if (obj.ENDS_IN === arg1) {
    const time2 = { days: intl.t.rLqNad, hours: intl.t.d1LvCA, minutes: intl.t.Z2LX7K };
    time4 = time2;
    tmp7 = require;
  } else if (obj.CREDITS_ENDS_IN === arg1) {
    const time3 = { days: intl.t.xQ3zuN, hours: intl.t.SFU7QN, minutes: intl.t.Y4FNdL };
    time4 = time3;
    tmp7 = require;
  } else if (obj.SHORT_TIME === arg1) {
    time4 = { days: intl.t.fYmirx, hours: intl.t["C3RO+g"], minutes: intl.t.r77oHc };
    tmp7 = require;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
    throw error;
  }
  useCountdownDefault;
  let str3 = "";
  try {
    const tmp7Result = tmp7(4558);
    str3 = tmp7Result.unitsAsStrings(tmp18, time4);
  } catch (err) {
    const tmp16Result = SentryUtilsDefault;
    tmp16Result.captureMessage("Error trying to format string for fractional nitro duration pill");
  }
  return str3;
});
const result = size.fileFinishedImporting("modules/billing/hooks/useFPDurationLeft.tsx");

export default tmp2;
export { CountDownMessageTypes };
export { roundFPCountdownUnits };
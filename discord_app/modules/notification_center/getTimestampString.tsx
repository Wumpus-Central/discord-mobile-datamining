// === Module 6076: getTimestampString ===

// Module 6076 (getTimestampString)
import util from "util" /* 1113 */;
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

function getDurationString(getFormatter) {
  ({ seconds, includeWeeks } = getFormatter);
  if (includeWeeks === undefined) {
    includeWeeks = false;
  }
  const time = getFormatter.getFormatter();
  if (includeWeeks) {
    const weeks = time.weeks;
  }
  if (seconds < 60) {
    const intl7 = util.intl;
    let formatToPlainStringResult = intl7.formatToPlainString(time.minutes, { minutes: 1 });
  } else if (seconds < 3600) {
    const intl6 = util.intl;
    const obj2 = { minutes: null };
    const _Math6 = Math;
    obj2.minutes = Math.floor(seconds / 60);
    formatToPlainStringResult = intl6.formatToPlainString(time.minutes, obj2);
  } else if (seconds < 86400) {
    const intl5 = util.intl;
    const obj3 = { hours: null };
    const _Math5 = Math;
    obj3.hours = Math.floor(seconds / 3600);
    formatToPlainStringResult = intl5.formatToPlainString(time.hours, obj3);
  } else {
    if (null != weeks) {
      if (seconds >= c3) {
        if (seconds < c4) {
          const intl4 = util.intl;
          const obj4 = { weeks: null };
          const _Math4 = Math;
          obj4.weeks = Math.floor(seconds / tmp);
          formatToPlainStringResult = intl4.formatToPlainString(weeks, obj4);
        }
      }
    }
    if (seconds < c4) {
      const intl3 = util.intl;
      const obj5 = { days: null };
      const _Math3 = Math;
      obj5.days = Math.floor(seconds / 86400);
      formatToPlainStringResult = intl3.formatToPlainString(time.days, obj5);
    } else if (seconds < c5) {
      const intl2 = util.intl;
      const obj6 = { months: null };
      const _Math2 = Math;
      obj6.months = Math.floor(seconds / tmp3);
      formatToPlainStringResult = intl2.formatToPlainString(time.months, obj6);
    } else {
      const intl = util.intl;
      const obj = { years: null };
      const _Math = Math;
      obj.years = Math.floor(seconds / tmp26);
      formatToPlainStringResult = intl.formatToPlainString(time.years, obj);
    }
  }
  return formatToPlainStringResult;
}
let c3 = 604800;
let c4 = 2592000;
let c5 = 31104000;
const result = size.fileFinishedImporting("modules/notification_center/getTimestampString.tsx");

export default function getTimestampString(arg0) {
  const obj = { seconds: _modDef2042().diff(_modDef2042(since), "s"), getFormatter, includeWeeks };
  ({ since, getFormatter, includeWeeks } = arg0);
  return getDurationString(obj);
};
export function getAbbreviatedFormatter() {
  const time = { minutes: util.t["XIGt+W"], hours: util.t.rhY1Rs, days: util.t.GBLpQ8, weeks: util.t.veX7G1, months: util.t.XzBNbS, years: util.t.I1E8p6 };
  return time;
}
export function getFullFormatter() {
  const time = { minutes: util.t["GqQ/Y9"], hours: util.t.c5zfWZ, days: util.t.amjnaI, months: util.t.SoON3V, years: util.t["12B3Re"] };
  return time;
}
export { getDurationString };
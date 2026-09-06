// === Module 10083: FamilyCenterRestrictedHoursUtils ===

// Module 10083 (FamilyCenterRestrictedHoursUtils)
import util from "util" /* 1114 */;
import user from "user" /* 1379 */;
import _modDef2396 from "module_2396" /* 2396 */;
import size from "module_2" /* 2 */;

function setsEqual(set, set2) {
  if (set.size !== set2.size) {
    return false;
  } else {
    const obj = set[Symbol.iterator]();
    while (obj !== undefined) {
      if (set2.has(tmp3)) {
        continue;
      } else {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function formatDays(days) {
  set = new Set(days);
  if (setsEqual(set, set2)) {
    const intl3 = util.intl;
    return intl3.string(_modDef2396.bPjqd1);
  } else if (setsEqual(set, set)) {
    const intl2 = util.intl;
    return intl2.string(_modDef2396["4dr9L9"]);
  } else if (setsEqual(set, set1)) {
    const intl = util.intl;
    return intl.string(_modDef2396["6lTTJ+"]);
  } else {
    const _Intl = Intl;
    const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { weekday: "short" });
    const mapped = items.map((item, index) => {
      let formatResult = null;
      if (set.has(item)) {
        const _Date = Date;
        const date = new Date(2025, 0, 5 + index);
        formatResult = dateTimeFormat.format(date);
      }
      return formatResult;
    });
    const found = mapped.filter((item) => null !== item);
    return found.join(", ");
  }
}
function getScheduleRuleDateRange(rule) {
  let str = "";
  if (null != rule.startTime) {
    str = "";
    if (null != rule.endTime) {
      const startTime = rule.startTime;
      const _Intl = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const endTime = rule.endTime;
      const _Intl2 = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      const _HermesInternal = HermesInternal;
      str = "" + dateTimeFormat.format(date) + " \u2013 " + dateTimeFormat1.format(date1);
      const formatResult = dateTimeFormat.format(date);
    }
  }
  return str;
}
const items = [user.DayOfWeek.SUNDAY, user.DayOfWeek.MONDAY, user.DayOfWeek.TUESDAY, user.DayOfWeek.WEDNESDAY, user.DayOfWeek.THURSDAY, user.DayOfWeek.FRIDAY, user.DayOfWeek.SATURDAY];
let set = new Set(items.slice(1, 6));
const items1 = [items[0], items[6]];
const set1 = new Set(items1);
const set2 = new Set(items);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx");

export const DAYS_ORDERED = items;
export const getShortDayLabels = function getShortDayLabels(narrow) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { weekday: narrow });
  return items.map((item, index) => dateTimeFormat.format(new Date(2025, 0, 5 + index)));
};
export const formatTime = function formatTime(hours) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  return dateTimeFormat.format(new Date(2025, 0, 1, hours.hours, hours.minutes));
};
export { formatDays };
export const timeToMinutes = function timeToMinutes(first1) {
  return 60 * first1.hours + first1.minutes;
};
export const formatDuration = function formatDuration(arg0) {
  const result = arg0 / 60;
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp3 = _modDef2396;
  if (isIntegerResult) {
    let obj = { hours: result };
    let formatToPlainStringResult = formatToPlainString(tmp3.hFDcmZ, obj);
  } else {
    obj = { hours: null };
    const _Math = Math;
    obj.hours = Math.floor(result);
    formatToPlainStringResult = formatToPlainString(tmp3.wcrXLM, obj);
  }
  return formatToPlainStringResult;
};
export { getScheduleRuleDateRange };
export const formatRestrictedScheduleInAppSubtitle = function formatRestrictedScheduleInAppSubtitle(startTime) {
  if (null != startTime.startTime) {
    if (null != startTime.endTime) {
      startTime = startTime.startTime;
      const _Intl = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const endTime = startTime.endTime;
      const _Intl2 = Intl;
      const tmp5 = formatDays(startTime.days);
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      const startTime2 = startTime.startTime;
      const endTime2 = startTime.endTime;
      const formatResult = dateTimeFormat.format(date);
      if (60 * startTime2.hours + startTime2.minutes > 60 * endTime2.hours + endTime2.minutes) {
        let OxveI8 = _modDef2396.OxveI8;
      } else {
        OxveI8 = _modDef2396["ERTn+E"];
      }
      const intl = util.intl;
      const obj = { days: tmp5, startTime: formatResult, endTime: dateTimeFormat1.format(date1) };
      return intl.formatToPlainString(OxveI8, obj);
    }
  }
  return null;
};
export const sortRulesByStartTime = function sortRulesByStartTime(rules) {
  const substr = rules.slice();
  return substr.sort((startTime, startTime2) => {
    startTime = startTime.startTime;
    let num;
    if (startTime != null) {
      num = startTime.hours;
    }
    if (num == null) {
      num = 0;
    }
    startTime2 = startTime.startTime;
    let num2;
    const result = 60 * num;
    if (startTime2 != null) {
      num2 = startTime2.minutes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const startTime3 = startTime2.startTime;
    let num3;
    const sum = result + num2;
    if (startTime3 != null) {
      num3 = startTime3.hours;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const startTime4 = startTime2.startTime;
    let num4;
    const result1 = 60 * num3;
    if (startTime4 != null) {
      num4 = startTime4.minutes;
    }
    if (num4 == null) {
      num4 = 0;
    }
    return sum - (result1 + num4);
  });
};
export const toTimeProto = function toTimeProto(hours) {
  const time = { hours: hours.hours, minutes: hours.minutes, seconds: 0, nanos: 0 };
  return time;
};
export const computeOverlappingInfo = function computeOverlappingInfo(first3, memo1, memo) {
  const conflictingEntries = [];
  const item = conflictingEntries.forEach((item, index) => {
    if (set.has(item)) {
      const found = memo1.find((days) => {
        days = days.days;
        return days.includes(closure_0);
      });
      if (null != found) {
        const obj = { dayLabel: memo[index], timeRange: getScheduleRuleDateRange(found) };
        conflictingEntries.push(obj);
      }
    }
    set = item;
  });
  return { conflictingEntries };
};
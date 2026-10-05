// === Module 12468: FamilyCenterRestrictedHoursUtils ===

// Module 12468 (FamilyCenterRestrictedHoursUtils)
import intl4 from "intl" /* 1126 */;
import user from "user" /* 1385 */;
import _modDef2493 from "module_2493" /* 2493 */;
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
    const intl3 = intl4.intl;
    return intl3.string(_modDef2493.bPjqd1);
  } else if (setsEqual(set, set)) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef2493["4dr9L9"]);
  } else if (setsEqual(set, set1)) {
    const intl = intl4.intl;
    return intl.string(_modDef2493["6lTTJ+"]);
  } else {
    const _Intl = Intl;
    let self = this;
    let self2 = this;
    const dateTimeFormat = new Intl.DateTimeFormat(intl4.intl.currentLocale, { weekday: "short" });
    const mapped = items.map(function(item, index) {
      let formatResult = null;
      if (set.has(item)) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const format = dateTimeFormat.format;
        const date = new Date(2025, 0, 5 + index);
        formatResult = format(date);
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
      const self = this;
      const self2 = this;
      const dateTimeFormat = new Intl.DateTimeFormat(intl4.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const self3 = this;
      const self4 = this;
      const format = dateTimeFormat.format;
      const endTime = rule.endTime;
      const _Intl2 = Intl;
      const self5 = this;
      const self6 = this;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const formatResult = format(date);
      const dateTimeFormat1 = new Intl.DateTimeFormat(intl4.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const self7 = this;
      const self8 = this;
      const format2 = dateTimeFormat1.format;
      const _HermesInternal = HermesInternal;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      str = "" + formatResult + " \u2013 " + format2(date1);
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
  const obj = { weekday: narrow };
  const dateTimeFormat = new Intl.DateTimeFormat(intl4.intl.currentLocale, obj);
  return items.map((item, index) => {
    const format = dateTimeFormat.format;
    const date = new Date(2025, 0, 5 + index);
    return format(date);
  });
};
export const formatTime = function formatTime(hours) {
  const dateTimeFormat = new Intl.DateTimeFormat(intl4.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  const format = dateTimeFormat.format;
  const date = new Date(2025, 0, 1, hours.hours, hours.minutes);
  return format(date);
};
export { formatDays };
export const timeToMinutes = function timeToMinutes(first1) {
  return 60 * first1.hours + first1.minutes;
};
export const formatDuration = function formatDuration(arg0) {
  let formatToPlainStringResult;
  const result = arg0 / 60;
  const isIntegerResult = Number.isInteger(result);
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp3 = _modDef2493;
  if (isIntegerResult) {
    const obj2 = { hours: result };
    formatToPlainStringResult = formatToPlainString(tmp3.hFDcmZ, obj2);
  } else {
    const _Math = Math;
    const wcrXLM = tmp3.wcrXLM;
    const obj = { hours: Math.floor(result) };
    formatToPlainStringResult = formatToPlainString(wcrXLM, obj);
  }
  return formatToPlainStringResult;
};
export { getScheduleRuleDateRange };
export const formatRestrictedScheduleInAppSubtitle = function formatRestrictedScheduleInAppSubtitle(startTime) {
  if (null != startTime.startTime) {
    if (null != startTime.endTime) {
      let OxveI8;
      startTime = startTime.startTime;
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const tmp5 = formatDays(startTime.days);
      const dateTimeFormat = new Intl.DateTimeFormat(intl4.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const self3 = this;
      const self4 = this;
      const format = dateTimeFormat.format;
      const endTime = startTime.endTime;
      const _Intl2 = Intl;
      const self5 = this;
      const self6 = this;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const formatResult = format(date);
      const dateTimeFormat1 = new Intl.DateTimeFormat(intl4.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const self7 = this;
      const self8 = this;
      const format2 = dateTimeFormat1.format;
      const startTime2 = startTime.startTime;
      const endTime2 = startTime.endTime;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      const format2Result = format2(date1);
      if (60 * startTime2.hours + startTime2.minutes > 60 * endTime2.hours + endTime2.minutes) {
        OxveI8 = _modDef2493.OxveI8;
      } else {
        OxveI8 = _modDef2493["ERTn+E"];
      }
      const intl = intl4.intl;
      const obj = { days: tmp5, startTime: formatResult, endTime: format2Result };
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
    first3 = item;
    if (first3.has(item)) {
      const found = memo1.find((days) => {
        days = days.days;
        return days.includes(closure_0);
      });
      if (null != found) {
        const push = conflictingEntries.push;
        const obj = { dayLabel: memo[index], timeRange: getScheduleRuleDateRange(found) };
        push(obj);
      }
    }
  });
  return { conflictingEntries };
};
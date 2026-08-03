// === Module 10400: setsEqual ===

// Module 10400 (setsEqual)
import set from "messagesProxy";

function setsEqual(set, set2) {
  if (set.size !== set2.size) {
    return false;
  } else {
    const obj = set[Symbol.iterator]();
    while (obj !== undefined) {
      if (set2.has(tmp3)) {
        continue;
      } else {
        let tmp5 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function formatDays(days) {
  const set = new Set(days);
  if (setsEqual(set, set2)) {
    const intl3 = set(1236).intl;
    return intl3.string(dateTimeFormat(2255).bPjqd1);
  } else if (tmp2(set, set)) {
    const intl2 = set(1236).intl;
    return intl2.string(dateTimeFormat(2255)["4dr9L9"]);
  } else if (tmp2(set, set1)) {
    const intl = set(1236).intl;
    return intl.string(dateTimeFormat(2255)["6lTTJ+"]);
  } else {
    const _Intl = Intl;
    dateTimeFormat = new Intl.DateTimeFormat(set(1236).intl.currentLocale, { weekday: "short" });
    const mapped = items.map((arg0, arg1) => {
      let formatResult = null;
      if (set.has(arg0)) {
        const _Date = Date;
        const date = new Date(2025, 0, 5 + arg1);
        formatResult = dateTimeFormat.format(date);
      }
      return formatResult;
    });
    const found = mapped.filter((arg0) => null !== arg0);
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
      const dateTimeFormat = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const endTime = rule.endTime;
      const _Intl2 = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      const _HermesInternal = HermesInternal;
      str = "" + dateTimeFormat.format(date) + " \u2013 " + dateTimeFormat1.format(date1);
      const formatResult = dateTimeFormat.format(date);
    }
  }
  return str;
}
const items = [require("create").DayOfWeek.SUNDAY, require("create").DayOfWeek.MONDAY, require("create").DayOfWeek.TUESDAY, require("create").DayOfWeek.WEDNESDAY, require("create").DayOfWeek.THURSDAY, require("create").DayOfWeek.FRIDAY, require("create").DayOfWeek.SATURDAY];
let set = new Set(require("getSystemLocale"));
const items1 = [items[0], items[6]];
const set1 = new Set(items1);
const set2 = new Set(items);
let result = set.fileFinishedImporting("modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx");

export const DAYS_ORDERED = items;
export const getShortDayLabels = function getShortDayLabels(narrow) {
  dateTimeFormat = new Intl.DateTimeFormat(dateTimeFormat(1236).intl.currentLocale, { weekday: narrow });
  return items.map((arg0, arg1) => dateTimeFormat.format(new Date(2025, 0, 5 + arg1)));
};
export const formatTime = function formatTime(hours) {
  const dateTimeFormat = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  return dateTimeFormat.format(new Date(2025, 0, 1, hours.hours, hours.minutes));
};
export { formatDays };
export const timeToMinutes = function timeToMinutes(first1) {
  return 60 * first1.hours + first1.minutes;
};
export const formatDuration = function formatDuration(arg0) {
  const result = arg0 / 60;
  const intl = require(1236) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp3 = importDefault(2255);
  if (isIntegerResult) {
    let obj = { hours: null };
    obj[0] = result;
    let formatToPlainStringResult = formatToPlainString(tmp3.hFDcmZ, obj);
  } else {
    obj = { hours: null };
    const _Math = Math;
    obj[0] = Math.floor(result);
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
      const dateTimeFormat = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date = Date;
      const date = new Date(2025, 0, 1, startTime.hours, startTime.minutes);
      const endTime = startTime.endTime;
      const _Intl2 = Intl;
      const tmp4 = formatDays(startTime.days);
      const tmp6 = require;
      const dateTimeFormat1 = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
      const _Date2 = Date;
      const date1 = new Date(2025, 0, 1, endTime.hours, endTime.minutes);
      const startTime2 = startTime.startTime;
      const endTime2 = startTime.endTime;
      const formatResult = dateTimeFormat.format(date);
      if (60 * startTime2.hours + startTime2.minutes > 60 * endTime2.hours + endTime2.minutes) {
        ERTn_E = importDefault(2255).OxveI8;
      } else {
        ERTn_E = importDefault(2255)["ERTn+E"];
      }
      const intl = tmp6(1236).intl;
      const obj = { days: null, startTime: null, endTime: null };
      obj[0] = tmp4;
      obj[1] = formatResult;
      obj[2] = dateTimeFormat1.format(date1);
      return intl.formatToPlainString(ERTn_E, obj);
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
export const toTimeProto = function toTimeProto(outer1_10) {
  return { hours: outer1_10.hours, minutes: outer1_10.minutes, seconds: 0, nanos: 0 };
};
export const computeOverlappingInfo = function computeOverlappingInfo(first3, memo1, memo) {
  let closure_0 = first3;
  let closure_1 = memo1;
  let closure_2 = memo;
  const conflictingEntries = [];
  const item = conflictingEntries.forEach((arg0, arg1) => {
    if (arg0.has(arg0)) {
      const found = memo1.find((days) => {
        days = days.days;
        return days.includes(closure_0);
      });
      if (null != found) {
        const obj = { dayLabel: null, timeRange: null };
        obj[0] = memo[arg1];
        obj[1] = outer1_9(found);
        conflictingEntries.push(obj);
      }
    }
  });
  return { conflictingEntries };
};
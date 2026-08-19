// discord_app/utils/DateUtils.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import create from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import tDefault from "../../_runtime/03975_t.js";
import onTimezoneChangeDefault from "../modules/date/onTimezoneChange.android.tsx";
import explicitContentFromProto from "../modules/user_settings/UserSettings.tsx";
import __DiscordCreateDateFormatter from "../modules/system_date_format/SystemDateFormatter.native.tsx";
import defaultMeridiemDefault from "../lib/makeDateFormatter.tsx";
import importDefaultResult from "../modules/user_settings/LocaleStore.tsx";
import importDefaultResult1 from "../Dispatcher.tsx";

require = fn;
function resetCache() {
  closure_5 = Object.create(null);
}
function syncHourCycleToIntlConfig() {
  const TimestampHourCycle = explicitContentFromProto.TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  let result = setting !== create.TimestampHourCycle.AUTO;
  if (result) {
    result = __DiscordCreateDateFormatter.supportsSystemDateFormatter();
    const tmp4Result = __DiscordCreateDateFormatter;
  }
  const values = Object.values(getSystemLocale.intl.formatConfig.time);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp13 = nextResult;
    let tmp14 = null != nextResult;
    if (tmp14) {
      tmp14 = "hour" in tmp13;
    }
    if (tmp14) {
      if (result) {
        if (setting === create.TimestampHourCycle.H12) {
          tmp13.hourCycle = "h12";
        }
      }
      if (result) {
        if (setting === create.TimestampHourCycle.H23) {
          tmp13.hourCycle = "h23";
        }
      }
      delete tmp2[tmp];
    }
    continue;
  }
}
function differenceInCalendarDays(str, str2) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "number";
  }
  if (!tmp) {
    const _Date = Date;
    tmp = str instanceof Date;
  }
  let date = str;
  if (!tmp) {
    let obj = { d: null };
    obj[0] = str;
    logger.error("Invalid date given to startOfDay", obj);
    const _Date2 = Date;
    date = new Date();
  }
  const date1 = new Date(date);
  const time = date1.getTime();
  let tmp10 = typeof str2 === "string";
  const result = Math.floor((time - 60000 * date1.getTimezoneOffset()) / c4) * c4;
  if (typeof str2 !== "string") {
    tmp10 = typeof str2 === "number";
  }
  if (!tmp10) {
    const _Date3 = Date;
    tmp10 = str2 instanceof Date;
  }
  let date2 = str2;
  if (!tmp10) {
    obj = { d: null };
    obj[0] = str2;
    logger.error("Invalid date given to startOfDay", obj);
    const _Date4 = Date;
    date2 = new Date();
  }
  const date3 = new Date(date2);
  const time1 = date3.getTime();
  return Math.floor((result - Math.floor((time1 - 60000 * date3.getTimezoneOffset()) / c4) * c4) / c4);
}
function dateFormat(date, LL, setting) {
  let obj2 = date;
  if (!obj.isMoment(date)) {
    obj2 = tDefault(date);
  }
  obj = tDefault;
  if (setting == null) {
    const TimestampHourCycle = explicitContentFromProto.TimestampHourCycle;
    setting = TimestampHourCycle.getSetting();
  }
  const combined = "" + obj2.locale() + ":" + LL + ":" + setting;
  let tmp7 = table[combined];
  if (null == tmp7) {
    const tmp9 = defaultMeridiemDefault(LL);
    table[combined] = tmp9;
    tmp7 = tmp9;
  }
  const localeResult = obj2.locale();
  let toDateResult = date;
  if (tmpResult.isMoment(date)) {
    toDateResult = date.toDate();
  }
  return tmp7(toDateResult);
}
let closure_3 = new timestampDefault("DateUtils");
let c4 = 86400000;
let closure_5 = Object.create(null);
importDefaultResult.addChangeListener(resetCache);
onTimezoneChangeDefault(resetCache);
const tmp2 = new timestampDefault("DateUtils");
const subscription = importDefaultResult1.subscribe("USER_SETTINGS_PROTO_UPDATE", syncHourCycleToIntlConfig);
const subscription1 = importDefaultResult1.subscribe("CONNECTION_OPEN", syncHourCycleToIntlConfig);
const items = [{ key: "days", millisecondsInUnit: 86400000 }, { key: "hours", millisecondsInUnit: 3600000 }, { key: "minutes", millisecondsInUnit: 60000 }, { key: "seconds", millisecondsInUnit: 1000 }];
const importDefaultResult2 = importDefaultResult1;
let result = require("obj132").fileFinishedImporting("utils/DateUtils.tsx");

export { differenceInCalendarDays };
export const differenceInDays = function differenceInDays(getTime, getTime2) {
  const time = getTime.getTime();
  return (time - getTime2.getTime()) / c4;
};
export const isSameHourMoment = function isSameHourMoment(toDate, toDate2) {
  const toDateResult = toDate.toDate();
  const toDateResult1 = toDate2.toDate();
  let tmp = Math.abs(+toDateResult - +toDateResult1) <= 3600000;
  if (tmp) {
    const hours = toDateResult.getHours();
    tmp = hours === toDateResult1.getHours();
  }
  return tmp;
};
export const isSameDay = function isSameDay(getDate, getDate2) {
  let tmp = Math.abs(+getDate - +getDate2) <= c4;
  if (tmp) {
    tmp = getDate.getDate() === getDate2.getDate();
    const date = getDate.getDate();
  }
  return tmp;
};
export const isWithinInterval = function isWithinInterval(arg0, arg1, arg2) {
  return Math.abs(arg0.valueOf() - arg1.valueOf()) < arg2;
};
export { dateFormat };
export const calendarFormat = function calendarFormat(timestamp, arg1, setting) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj3 = tDefault();
  const localeDataResult = tDefault.localeData();
  let toDateResult = timestamp;
  if (obj4.isMoment(timestamp)) {
    toDateResult = timestamp.toDate();
  }
  const tmp3Result = differenceInCalendarDays(toDateResult, obj3.toDate());
  if (tmp3Result < -1) {
    return dateFormat(timestamp, "L LT", setting);
  } else {
    let str2 = "lastDay";
    if (tmp3Result >= 0) {
      if (tmp3Result < 1) {
        str2 = "sameDay";
        if (flag) {
          return dateFormat(timestamp, "LT", setting);
        }
      } else {
        let str = "sameElse";
        if (tmp3Result < 2) {
          str = "nextDay";
        }
        str2 = str;
      }
    }
    let tmp8 = timestamp;
    if (!tmpResult.isMoment(timestamp)) {
      tmp8 = tDefault(timestamp);
    }
    return dateFormat(timestamp, localeDataResult.calendar(str2, tmp8, obj3), setting);
  }
  obj4 = tDefault;
};
export const calendarFormatCompact = function calendarFormatCompact(timestamp) {
  const obj3 = tDefault();
  const localeDataResult = tDefault.localeData();
  let toDateResult = timestamp;
  if (obj4.isMoment(timestamp)) {
    toDateResult = timestamp.toDate();
  }
  const tmp2Result = differenceInCalendarDays(toDateResult, obj3.toDate());
  if (0 === tmp2Result) {
    return tmp5(timestamp, "LT", arg1);
  } else if (-1 === tmp2Result) {
    let tmp6 = timestamp;
    if (!tmpResult.isMoment(timestamp)) {
      tmp6 = tDefault(timestamp);
    }
    const str2 = localeDataResult.calendar("lastDay", tmp6, obj3);
    tmpResult = tDefault;
  }
  obj4 = tDefault;
};
export const dateStringToMoment = function dateStringToMoment(arg0) {
  if (arg0.length >= 200) {
    const _Error = Error;
    error = new Error("Date string exceeds maximum length");
    throw error;
  } else {
    return tDefault(arg0);
  }
};
export const accessibilityLabelCalendarFormat = function accessibilityLabelCalendarFormat(timestamp) {
  const date = new Date();
  const tmp4 = differenceInCalendarDays(timestamp, date);
  let str = "sameElse";
  if (tmp4 >= -1) {
    let str2 = "lastDay";
    if (tmp4 >= 0) {
      let str3 = "sameDay";
      if (tmp4 >= 1) {
        let str4 = "sameElse";
        if (tmp4 < 2) {
          str4 = "nextDay";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  let str5 = "LLL";
  if ("sameElse" !== str) {
    str5 = localeDataResult.calendar(str, tDefault(timestamp), tDefault(date));
    const tmp6 = tDefault(timestamp);
  }
  return dateFormat(timestamp, str5);
};
export const diffAsUnits = function diffAsUnits(date, closure_0) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj;
  closure_1 = undefined;
  let num = 0;
  if (flag) {
    num = 1;
  }
  obj = { days: 0, hours: 0, minutes: 0, seconds: num };
  if (date > closure_0) {
    return obj;
  } else {
    if (flag) {
      const _Number = Number;
      const _Number2 = Number;
      const sum = Number(date) + 1200;
      if (sum > Number(closure_0)) {
        return obj;
      }
    }
    const _Number3 = Number;
    const _Number4 = Number;
    closure_1 = Number(closure_0) - Number(date);
    const item = items.forEach((item, index) => {
      ({ key, millisecondsInUnit } = item);
      obj[key] = Math.floor(closure_1 / millisecondsInUnit);
      closure_1 = closure_1 - obj[key] * millisecondsInUnit;
    });
    return obj;
  }
};
export const unitsAsStrings = function unitsAsStrings(diffAsUnitsResult, days2) {
  if (diffAsUnitsResult.days > 0) {
    const intl3 = getSystemLocale.intl;
    let obj = { days: null, hours: null };
    ({ days: obj3[0], hours: obj3[1] } = diffAsUnitsResult);
    let formatToPlainStringResult = intl3.formatToPlainString(days2.days, obj);
  } else if (diffAsUnitsResult.hours > 0) {
    const intl2 = getSystemLocale.intl;
    obj = { hours: null, minutes: null };
    ({ hours: obj2[0], minutes: obj2[1] } = diffAsUnitsResult);
    formatToPlainStringResult = intl2.formatToPlainString(days2.hours, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { minutes: null };
    const _Math = Math;
    obj[0] = Math.max(1, diffAsUnitsResult.minutes);
    formatToPlainStringResult = intl.formatToPlainString(days2.minutes, obj);
  }
  return formatToPlainStringResult;
};
export const getESTDate = function getESTDate() {
  const date = new Date();
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
};
export const getMonthlyProgressPercentage = function getMonthlyProgressPercentage() {
  const date1 = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  const fullYear = date1.getFullYear();
  const date = new Date();
  const date2 = new Date(fullYear, date1.getMonth() + 1, 0);
  return date1.getDate() / new Date(fullYear, date1.getMonth() + 1, 0).getDate() * 100;
};
export const getDaysRemainingInMonth = function getDaysRemainingInMonth() {
  const date1 = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  const fullYear = date1.getFullYear();
  const date = new Date();
  const date2 = new Date(fullYear, date1.getMonth() + 1, 0);
  return new Date(fullYear, date1.getMonth() + 1, 0).getDate() - date1.getDate();
};
export const formatDateForDatetimeLocal = function formatDateForDatetimeLocal(arg0) {
  let str = "";
  if (null != arg0) {
    if (arg0.length >= 200) {
      const _Error = Error;
      error = new Error("Date string exceeds maximum length");
      throw error;
    } else {
      str = tDefault(arg0).format("YYYY-MM-DDTHH:mm");
      const obj = tDefault(arg0);
    }
  }
  return str;
};
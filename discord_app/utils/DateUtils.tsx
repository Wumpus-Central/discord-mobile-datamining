// discord_app/utils/DateUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import intl4 from "../intl/index.native.tsx";
import preloaded_user_settings from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import _modDef4467 from "../../_runtime/metro/04467__.js";
import react_nativeDefault from "../modules/date/onTimezoneChange.android.tsx";
import SystemDateFormatter from "../modules/system_date_format/SystemDateFormatter.native.tsx";
import makeDateFormatterDefault from "../lib/makeDateFormatter.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import Dispatcher_mod from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

function resetCache() {
  closure_5 = Object.create(null);
}
function syncHourCycleToIntlConfig() {
  const TimestampHourCycle = UserSettings.TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  let result = setting !== preloaded_user_settings.TimestampHourCycle.AUTO;
  if (result) {
    const tmp2Result = SystemDateFormatter;
    result = tmp2Result.supportsSystemDateFormatter();
  }
  const values = Object.values(intl4.intl.formatConfig.time);
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp11 = nextResult;
    let tmp12 = null != nextResult;
    if (tmp12) {
      tmp12 = "hour" in tmp11;
    }
    if (tmp12) {
      if (result) {
        if (setting === preloaded_user_settings.TimestampHourCycle.H12) {
          tmp11.hourCycle = "h12";
        }
      }
      if (result) {
        if (setting === preloaded_user_settings.TimestampHourCycle.H23) {
          tmp11.hourCycle = "h23";
        }
      }
      delete tmp10["hourCycle"];
    }
    continue;
  }
}
function differenceInCalendarDays(d, d2) {
  let tmp = typeof d === "string";
  const _Math = Math;
  if (typeof d !== "string") {
    tmp = typeof d === "number";
  }
  if (!tmp) {
    const _Date = Date;
    tmp = d instanceof Date;
  }
  let date = d;
  if (!tmp) {
    const obj = { d };
    logger.error("Invalid date given to startOfDay", obj);
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    date = new Date();
  }
  const date1 = new Date(date);
  const time = date1.getTime();
  let tmp8 = typeof d2 === "string";
  const result = Math.floor((time - 60000 * date1.getTimezoneOffset()) / c4) * c4;
  if (typeof d2 !== "string") {
    tmp8 = typeof d2 === "number";
  }
  if (!tmp8) {
    const _Date3 = Date;
    tmp8 = d2 instanceof Date;
  }
  let date2 = d2;
  if (!tmp8) {
    const obj2 = { d: d2 };
    logger.error("Invalid date given to startOfDay", obj2);
    const _Date4 = Date;
    const self3 = this;
    const self4 = this;
    date2 = new Date();
  }
  const date3 = new Date(date2);
  const time1 = date3.getTime();
  return floor((result - Math.floor((time1 - 60000 * date3.getTimezoneOffset()) / c4) * c4) / c4);
}
function dateFormat(date, LL, setting) {
  let obj2 = date;
  const obj = _modDef4467;
  if (!obj.isMoment(date)) {
    obj2 = _modDef4467(date);
  }
  const localeResult = obj2.locale();
  if (setting == null) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    setting = TimestampHourCycle.getSetting();
  }
  const combined = "" + localeResult + ":" + LL + ":" + setting;
  let tmp7 = closure_5[combined];
  if (null == tmp7) {
    const tmp9 = makeDateFormatterDefault(LL);
    closure_5[combined] = tmp9;
    tmp7 = tmp9;
  }
  let toDateResult = date;
  const tmpResult = _modDef4467;
  if (tmpResult.isMoment(date)) {
    toDateResult = date.toDate();
  }
  return tmp7(toDateResult);
}
const logger = new LoggerDefault("DateUtils");
let c4 = 86400000;
new LoggerDefault("DateUtils");
let closure_5 = Object.create(null);
LocaleStore.addChangeListener(resetCache);
react_nativeDefault(resetCache);
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("USER_SETTINGS_PROTO_UPDATE", syncHourCycleToIntlConfig);
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_OPEN", syncHourCycleToIntlConfig);
const items = [
  { key: "days", millisecondsInUnit: 86400000 },
  { key: "hours", millisecondsInUnit: 3600000 },
  { key: "minutes", millisecondsInUnit: 60000 },
  { key: "seconds", millisecondsInUnit: 1000 },
];
let result = size.fileFinishedImporting("utils/DateUtils.tsx");

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
    const date = getDate.getDate();
    tmp = date === getDate2.getDate();
  }
  return tmp;
};
export const isWithinInterval = function isWithinInterval(timestamp, timestamp2, arg2) {
  const valueOfResult = timestamp.valueOf();
  return abs(valueOfResult - timestamp2.valueOf()) < arg2;
};
export { dateFormat };
export const calendarFormat = function calendarFormat(date, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = _modDef4467;
  const localeDataResult = obj.localeData();
  const obj2 = _modDef4467();
  let toDateResult = date;
  const obj3 = _modDef4467;
  if (obj3.isMoment(date)) {
    toDateResult = date.toDate();
  }
  const tmp4Result = differenceInCalendarDays(toDateResult, obj2.toDate());
  if (tmp4Result < -1) {
    return dateFormat(date, "L LT", setting);
  } else {
    let str2 = "lastDay";
    if (tmp4Result >= 0) {
      if (tmp4Result < 1) {
        str2 = "sameDay";
        if (flag) {
          return dateFormat(date, "LT", setting);
        }
      } else {
        let str = "sameElse";
        if (tmp4Result < 2) {
          str = "nextDay";
        }
        str2 = str;
      }
    }
    const calendar = localeDataResult.calendar;
    let tmp9 = date;
    const tmpResult = _modDef4467;
    if (!tmpResult.isMoment(date)) {
      tmp9 = _modDef4467(date);
    }
    return dateFormat(date, calendar(str2, tmp9, obj2), setting);
  }
};
export const calendarFormatCompact = function calendarFormatCompact(timestamp, setting) {
  const obj = _modDef4467;
  const localeDataResult = obj.localeData();
  const obj2 = _modDef4467();
  let toDateResult = timestamp;
  const obj3 = _modDef4467;
  if (obj3.isMoment(timestamp)) {
    toDateResult = timestamp.toDate();
  }
  const tmp4Result = differenceInCalendarDays(toDateResult, obj2.toDate());
  let str = "LT";
  if (0 !== tmp4Result) {
    let str2;
    if (-1 === tmp4Result) {
      const calendar = localeDataResult.calendar;
      let tmp8 = timestamp;
      const tmpResult = _modDef4467;
      if (!tmpResult.isMoment(timestamp)) {
        tmp8 = _modDef4467(timestamp);
      }
      str2 = calendar("lastDay", tmp8, obj2);
    } else {
      str2 = "L";
      if (tmp4Result > -7) {
        str2 = "dddd";
      }
    }
    str = str2;
  }
  return dateFormat(timestamp, str, setting);
};
export const dateStringToMoment = function dateStringToMoment(arg0) {
  if (arg0.length >= 200) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Date string exceeds maximum length");
    throw error;
  } else {
    return _modDef4467(arg0);
  }
};
export const accessibilityLabelCalendarFormat = function accessibilityLabelCalendarFormat(timestamp) {
  const obj = _modDef4467;
  const localeDataResult = obj.localeData();
  const date = new Date();
  const tmp5 = differenceInCalendarDays(timestamp, date);
  let str = "sameElse";
  if (tmp5 >= -1) {
    let str2 = "lastDay";
    if (tmp5 >= 0) {
      let str3 = "sameDay";
      if (tmp5 >= 1) {
        let str4 = "sameElse";
        if (tmp5 < 2) {
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
    const calendar = localeDataResult.calendar;
    const tmp7 = _modDef4467(timestamp);
    str5 = calendar(str, tmp7, _modDef4467(date));
  }
  return dateFormat(timestamp, str5);
};
export const diffAsUnits = function diffAsUnits(date, expiresAt) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let time;
  let closure_1;
  let num = 0;
  if (flag) {
    num = 1;
  }
  time = { days: 0, hours: 0, minutes: 0, seconds: num };
  if (date > expiresAt) {
    return time;
  } else {
    if (flag) {
      const _Number = Number;
      const _Number2 = Number;
      const sum = Number(date) + 1200;
      if (sum > Number(expiresAt)) {
        return time;
      }
    }
    const _Number3 = Number;
    const _Number4 = Number;
    const NumberResult = Number(expiresAt);
    closure_1 = NumberResult - Number(date);
    const item = items.forEach((item) => {
      let key;
      let millisecondsInUnit;
      ({ key, millisecondsInUnit } = item);
      time[key] = Math.floor(closure_1 / millisecondsInUnit);
      closure_1 = closure_1 - time[key] * millisecondsInUnit;
    });
    return time;
  }
};
export const unitsAsStrings = function unitsAsStrings(diffAsUnitsResult, time) {
  let formatToPlainStringResult;
  if (diffAsUnitsResult.days > 0) {
    const intl3 = intl4.intl;
    const obj4 = { days: null, hours: null };
    ({ days: obj3.days, hours: obj3.hours } = diffAsUnitsResult);
    formatToPlainStringResult = intl3.formatToPlainString(time.days, obj4);
  } else if (diffAsUnitsResult.hours > 0) {
    const intl2 = intl4.intl;
    time = { hours: null, minutes: null };
    ({ hours: obj2.hours, minutes: obj2.minutes } = diffAsUnitsResult);
    formatToPlainStringResult = intl2.formatToPlainString(time.hours, time);
  } else {
    const intl = intl4.intl;
    const _Math = Math;
    const formatToPlainString = intl.formatToPlainString;
    const minutes = time.minutes;
    const obj = { minutes: Math.max(1, diffAsUnitsResult.minutes) };
    formatToPlainStringResult = formatToPlainString(minutes, obj);
  }
  return formatToPlainStringResult;
};
export const getESTDate = function getESTDate() {
  const date = new Date();
  const date1 = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
  return date1;
};
export const getMonthlyProgressPercentage = function getMonthlyProgressPercentage() {
  const date = new Date();
  const date1 = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const fullYear = date1.getFullYear();
  const date2 = new Date(fullYear, date1.getMonth() + 1, 0);
  const date3 = date2.getDate();
  return (date1.getDate() / date3) * 100;
};
export const getDaysRemainingInMonth = function getDaysRemainingInMonth() {
  const date = new Date();
  const date1 = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const fullYear = date1.getFullYear();
  const date2 = new Date(fullYear, date1.getMonth() + 1, 0);
  const date3 = date2.getDate();
  return date3 - date1.getDate();
};
export const formatDateForDatetimeLocal = function formatDateForDatetimeLocal(arg0) {
  let str = "";
  if (null != arg0) {
    if (arg0.length >= 200) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Date string exceeds maximum length");
      throw error;
    } else {
      const obj = _modDef4467(arg0);
      str = obj.format("YYYY-MM-DDTHH:mm");
    }
  }
  return str;
};

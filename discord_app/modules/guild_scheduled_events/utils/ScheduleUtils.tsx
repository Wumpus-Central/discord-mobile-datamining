// discord_app/modules/guild_scheduled_events/utils/ScheduleUtils.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _mod12 from "../../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import intl9 from "../../../intl/index.native.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import CreateGuildScheduledEventConstants from "../CreateGuildScheduledEventConstants.tsx";
import _mod9165 from "../../../../_runtime/metro/09165__.js";
import UserStore from "../../../stores/UserStore.tsx";
import GuildScheduledEventsConstants from "../GuildScheduledEventsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
function getRRule(byWeekday) {
  let date1;
  let mapped;
  let tmp11;
  let tmp14;
  let tmp8;
  let tmp2 = null;
  if (null != byWeekday.byWeekday) {
    items = [];
    HermesBuiltin.arraySpread(items, byWeekday.byWeekday, 0);
    tmp2 = items;
  }
  const byNWeekday = byWeekday.byNWeekday;
  if (byNWeekday != null) {
    mapped = byNWeekday.map((day) => {
      const weekday = new _mod9165.Weekday(day.day, day.n);
      return weekday;
    });
  }
  let self = this;
  const date = new Date(byWeekday.start);
  date.setMilliseconds(0);
  const obj = {
    dtstart: date,
    until: date1,
    freq: null,
    interval: null,
    byweekday: tmp2,
    bymonth: tmp8,
    bymonthday: tmp11,
    byyearday: tmp14,
    count: byWeekday.count,
  };
  date1 = null;
  const RRule = _mod9165.RRule;
  if (null != byWeekday.end) {
    const _Date = Date;
    const self2 = this;
    self = this;
    date1 = new Date(byWeekday.end);
  }
  ({ frequency: obj2.freq, interval: obj2.interval } = byWeekday);
  if (tmp2 == null) {
    tmp2 = mapped;
  }
  tmp8 = null;
  if (null != byWeekday.byMonth) {
    items1 = [];
    HermesBuiltin.arraySpread(items1, byWeekday.byMonth, 0);
    tmp8 = items1;
  }
  tmp11 = null;
  if (null != byWeekday.byMonthDay) {
    items2 = [];
    HermesBuiltin.arraySpread(items2, byWeekday.byMonthDay, 0);
    tmp11 = items2;
  }
  tmp14 = null;
  if (null != byWeekday.byYearDay) {
    items3 = [];
    HermesBuiltin.arraySpread(items3, byWeekday.byYearDay, 0);
    tmp14 = items3;
  }
  const rRule = new RRule(obj);
  return rRule;
}
function getValidWeekdays(toDate) {
  let tmp5;
  const toDateResult = toDate.toDate();
  const day = toDateResult.getDay();
  const weekday = new _mod9165.Weekday(items6[day]);
  const toDateResult1 = toDate.toDate();
  const uTCDay = toDateResult1.getUTCDay();
  const weekday1 = new _mod9165.Weekday(items6[uTCDay]);
  if (weekday1.weekday - weekday.weekday > 0) {
    tmp5 = items2;
  } else {
    tmp5 = weekday1.weekday - weekday.weekday < 0 ? items1 : items;
  }
  return tmp5;
}
function getValidWeekends(toDate) {
  let tmp5;
  const toDateResult = toDate.toDate();
  const day = toDateResult.getDay();
  const weekday = new _mod9165.Weekday(items6[day]);
  const toDateResult1 = toDate.toDate();
  const uTCDay = toDateResult1.getUTCDay();
  const weekday1 = new _mod9165.Weekday(items6[uTCDay]);
  if (weekday1.weekday - weekday.weekday > 0) {
    tmp5 = items5;
  } else {
    tmp5 = weekday1.weekday - weekday.weekday < 0 ? items4 : items3;
  }
  return tmp5;
}
const RecurrenceOptions = CreateGuildScheduledEventConstants.RecurrenceOptions;
({ GuildScheduledEventEntityTypes: hasOwnProperty, GuildScheduledEventStatus: metroRequire } =
  GuildScheduledEventsConstants);
let items = [
  _mod9165.RRule.MO.weekday,
  _mod9165.RRule.TU.weekday,
  _mod9165.RRule.WE.weekday,
  _mod9165.RRule.TH.weekday,
  _mod9165.RRule.FR.weekday,
];
let items1 = [
  _mod9165.RRule.SU.weekday,
  _mod9165.RRule.MO.weekday,
  _mod9165.RRule.TU.weekday,
  _mod9165.RRule.WE.weekday,
  _mod9165.RRule.TH.weekday,
];
let items2 = [
  _mod9165.RRule.TU.weekday,
  _mod9165.RRule.WE.weekday,
  _mod9165.RRule.TH.weekday,
  _mod9165.RRule.FR.weekday,
  _mod9165.RRule.SA.weekday,
];
let items3 = [_mod9165.RRule.SA.weekday, _mod9165.RRule.SU.weekday];
const items4 = [_mod9165.RRule.FR.weekday, _mod9165.RRule.SA.weekday];
const items5 = [_mod9165.RRule.SU.weekday, _mod9165.RRule.MO.weekday];
const items6 = [
  _mod9165.RRule.SU.weekday,
  _mod9165.RRule.MO.weekday,
  _mod9165.RRule.TU.weekday,
  _mod9165.RRule.WE.weekday,
  _mod9165.RRule.TH.weekday,
  _mod9165.RRule.FR.weekday,
  _mod9165.RRule.SA.weekday,
];
const set = new Set([0, 6]);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/ScheduleUtils.tsx");

export const MAX_DAYS_AHEAD_AN_EVENT_CAN_START = 365;
export const MAX_DAYS_AHEAD_AN_EVENT_CAN_END = 366;
export const MAX_YEARS_AHEAD_RECURRING_EVENT = 4;
export const getRecurrenceOptions = function getRecurrenceOptions(startDate) {
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let obj6;
  let v5DFcVl;
  const toDateResult = startDate.toDate();
  const rounded = Math.ceil(toDateResult.getDate() / 7);
  const formatResult = startDate.format("dddd");
  const obj = { id: "none", value: RecurrenceOptions.NONE, label: intl.string(intl9.t["0bK0B1"]) };
  intl = intl9.intl;
  items = [obj, , , , ,];
  const obj2 = {
    id: "weekly",
    value: RecurrenceOptions.WEEKLY,
    label: intl2.formatToPlainString(intl9.t["B8/yfp"], { weekday: formatResult }),
  };
  intl2 = intl9.intl;
  items[1] = obj2;
  const obj3 = {
    id: "biweekly",
    value: RecurrenceOptions.BIWEEKLY,
    label: intl3.formatToPlainString(intl9.t["z+aIuX"], { weekday: formatResult }),
  };
  intl3 = intl9.intl;
  items[2] = obj3;
  const obj4 = {
    id: "monthly",
    value: RecurrenceOptions.MONTHLY,
    label: intl4.formatToPlainString(intl9.t.mjOEBk, { nth: rounded, weekday: formatResult }),
  };
  intl4 = intl9.intl;
  items[3] = obj4;
  const obj5 = { id: "yearly", value: RecurrenceOptions.YEARLY, label: formatToPlainString(v5DFcVl, obj6) };
  const intl5 = intl9.intl;
  formatToPlainString = intl5.formatToPlainString;
  obj6 = { date: toDateResult.toLocaleString(intl9.intl.currentLocale, { month: "short", day: "2-digit" }) };
  v5DFcVl = intl9.t["5DFcVl"];
  items[4] = obj5;
  const obj7 = { id: "daily", value: RecurrenceOptions.DAILY, label: intl6.string(intl9.t.JX8E1E) };
  intl6 = intl9.intl;
  items[5] = obj7;
  if (set.has(toDateResult.getDay())) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      const push2 = items.push;
      const obj8 = { id: "weekendOnly", value: RecurrenceOptions.WEEKEND_ONLY, label: intl8.string(intl9.t.hRpynV) };
      intl8 = intl9.intl;
      push2(obj8);
    }
  } else {
    const push = items.push;
    const obj9 = { id: "weekdayOnly", value: RecurrenceOptions.WEEKDAY_ONLY, label: intl7.string(intl9.t["jYR/MY"]) };
    intl7 = intl9.intl;
    push(obj9);
  }
  return items;
};
export const getInitialEventStartDate = function getInitialEventStartDate() {
  const obj = _modDef4461();
  const addResult = obj.add(1, "hour");
  const hourResult = addResult.hour();
  let sum = hourResult;
  if (addResult.minutes() >= 30) {
    sum = hourResult + 1;
  }
  const hourResult1 = addResult.hour(sum);
  const minutesResult = hourResult1.minutes(0);
  return minutesResult.seconds(0);
};
export const getInitialEventEndDate = function getInitialEventEndDate(arg0) {
  let obj;
  let tmp;
  if (null != arg0) {
    obj = _modDef4461(arg0);
    tmp = importDefault;
  } else {
    tmp = importDefault;
    obj = _modDef4461();
  }
  const addResult = obj.add(1, "hour");
  const result = addResult.minutes() % 60;
  const obj3 = tmp(4461)(addResult);
  const addResult1 = obj3.add(60 - result, "minutes");
  return addResult1.seconds(0);
};
export const getNextBucketedTime = function getNextBucketedTime(minutes, arg1) {
  const diff = arg1 - (minutes.minutes() % arg1);
  const obj = _modDef4461(minutes);
  const addResult = obj.add(diff, "minutes");
  return addResult.seconds(0);
};
export const getEventTimeData = function getEventTimeData(scheduled_start_time, toISOStringResult1, arg2) {
  let obj3;
  let obj5;
  let obj6;
  let tmp15;
  let obj = arg2;
  if (null == arg2) {
    obj = _modDef4461();
  }
  const obj2 = _modDef4461(scheduled_start_time);
  if (null != toISOStringResult1) {
    if ("" !== toISOStringResult1) {
      obj3 = _modDef4461(toISOStringResult1);
    }
  }
  const isSameResult = null != toISOStringResult1 && obj2.isSame(obj3, "day");
  const differenceInCalendarDays = DateUtils.differenceInCalendarDays;
  DateUtils;
  const toDateResult = obj2.toDate();
  const result = differenceInCalendarDays(toDateResult, obj.toDate());
  if (result <= 1) {
    let dateFormatResult;
    if (result >= 0) {
      const dateFormat = DateUtils.dateFormat;
      DateUtils;
      let str3 = "nextDay";
      const calendar = obj2.localeData().calendar;
      obj2.localeData();
      if (result < 1) {
        str3 = "sameDay";
      }
      dateFormatResult = dateFormat(obj2, calendar(str3, obj2, obj));
    }
    const obj4 = {
      startDateTimeString: dateFormatResult,
      endDateTimeString: tmp15,
      currentOrPastEvent: obj2 <= obj,
      upcomingEvent: obj2 <= obj5.add(1, "hour"),
      withinStartWindow: obj2 <= obj6.add(15, "minute"),
      diffMinutes: obj2.diff(obj, "minutes"),
    };
    tmp15 = undefined;
    if (null != obj3) {
      let formatResult;
      if (isSameResult) {
        formatResult = obj3.format("LT");
      } else {
        const dateFormat3 = DateUtils.dateFormat;
        DateUtils;
        const value = obj3.get("years");
        let str6 = "ddd MMM Do, YYYY \u00B7 LT";
        if (value === obj.get("years")) {
          str6 = "ddd MMM Do \u00B7 LT";
        }
        formatResult = dateFormat3(obj3, str6);
      }
      tmp15 = formatResult;
    }
    obj5 = _modDef4461();
    obj6 = _modDef4461();
    return obj4;
  }
  const dateFormat2 = DateUtils.dateFormat;
  DateUtils;
  const value2 = obj2.get("years");
  let str4 = "ddd MMM Do, YYYY \u00B7 LT";
  if (value2 === obj.get("years")) {
    str4 = "ddd MMM Do \u00B7 LT";
  }
  dateFormatResult = dateFormat2(obj2, str4);
};
export const convertJSDayToRRuleDay = function convertJSDayToRRuleDay(arg0) {
  const weekday = new _mod9165.Weekday(items6[arg0]);
  return weekday;
};
export const getBaseScheduleForRecurrence = function getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guildEvent) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = guildEvent);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: _modDef4461(scheduled_start_time), endDate: "r" };
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = _modDef4461(scheduled_end_time);
      tmp = obj;
    }
  }
  const tmp4 = _modDef4461;
  const obj2 = SnowflakeUtilsDefault;
  const startDate = tmp4(obj2.extractTimestamp(nextRecurrenceIdInEvent));
  let endDate1;
  if (tmp != null) {
    endDate1 = tmp.endDate;
  }
  let endDate2;
  if (null != endDate1) {
    const endDate = tmp.endDate;
    const cloneResult = startDate.clone();
    endDate2 = cloneResult.add(endDate.diff(tmp.startDate));
  }
  return { startDate, endDate: endDate2 };
};
export const getScheduleForRecurrenceWithException = function getScheduleForRecurrenceWithException(
  baseScheduleForRecurrence,
  tmp11Result,
) {
  let tmp3;
  if (null == tmp11Result) {
    return baseScheduleForRecurrence;
  } else {
    let startDate;
    let endDate = tmp11Result.scheduled_end_time;
    if (endDate == null) {
      endDate = baseScheduleForRecurrence.endDate;
    }
    if (null != tmp11Result.scheduled_start_time) {
      startDate = _modDef4461(tmp11Result.scheduled_start_time);
    } else {
      startDate = baseScheduleForRecurrence.startDate;
    }
    const obj = { startDate, endDate: tmp3 };
    tmp3 = undefined;
    if (null != endDate) {
      tmp3 = _modDef4461(endDate);
    }
    return obj;
  }
};
export const getScheduleFromEventData = function getScheduleFromEventData(arg0) {
  let scheduledEndTime;
  let scheduledStartTime;
  ({ scheduledStartTime, scheduledEndTime } = arg0);
  let tmp;
  if (null != scheduledStartTime) {
    const obj = { startDate: _modDef4461(scheduledStartTime), endDate: "r" };
    tmp = obj;
    if (null != scheduledEndTime) {
      obj.endDate = _modDef4461(scheduledEndTime);
      tmp = obj;
    }
  }
  return tmp;
};
export const getScheduleFromEvent = function getScheduleFromEvent(arg0) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: _modDef4461(scheduled_start_time), endDate: "r" };
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = _modDef4461(scheduled_end_time);
      tmp = obj;
    }
  }
  return tmp;
};
export const hasValidSchedule = function hasValidSchedule(arg0, arg1) {
  let endDate;
  let startDate;
  ({ startDate, endDate } = arg0);
  let tmp = null != startDate;
  if (tmp) {
    let tmp4 = startDate >= _modDef4461();
    if (tmp4) {
      let tmp6 = !(null != endDate && endDate < startDate);
      if (tmp6) {
        tmp6 = arg1 !== hasOwnProperty.EXTERNAL || null != endDate;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const areDatesIdentical = function areDatesIdentical(endDate, endDate2) {
  if (null != endDate) {
    let isSameResult;
    if (null != endDate2) {
      isSameResult = endDate.isSame(endDate2);
    }
    return isSameResult;
  }
  isSameResult = null == endDate && null == endDate2;
};
export const areSchedulesIdentical = function areSchedulesIdentical(startDate, baseScheduleForRecurrence) {
  if (null != startDate) {
    let isSameResult;
    if (null != baseScheduleForRecurrence) {
      startDate = startDate.startDate;
      const startDate2 = baseScheduleForRecurrence.startDate;
      if (null != startDate) {
        if (null != startDate2) {
          isSameResult = startDate.isSame(startDate2);
        }
        if (isSameResult) {
          const endDate = startDate.endDate;
          const endDate2 = baseScheduleForRecurrence.endDate;
          if (null != endDate) {
            let isSameResult1;
            if (null != endDate2) {
              isSameResult1 = endDate.isSame(endDate2);
            }
            isSameResult = isSameResult1;
          }
          isSameResult1 = null == endDate && null == endDate2;
        }
      }
      isSameResult = null == startDate && null == startDate2;
    }
    return isSameResult;
  }
  isSameResult = null == startDate && null == baseScheduleForRecurrence;
};
export { getRRule };
export const generateNextRecurrences = function generateNextRecurrences(length, rRule, date, arg3) {
  let closure_0 = length;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  date = new Date();
  let date1 = date;
  if (date <= date) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date();
  }
  const date2 = new Date();
  date2.setFullYear(date2.getFullYear() + 4);
  const betweenResult = rRule.between(date1, date2, true, (arg0, arg1) => arg1 < length + 1);
  if (flag) {
    if (betweenResult.length > 0) {
      let substr;
      const first = betweenResult[0];
      const time = date.getTime();
      if (time === first.getTime()) {
        substr = betweenResult.slice(1);
      }
      return substr;
    }
  }
  substr = betweenResult.slice(0, length);
};
export const getNextRecurrenceInEvent = function getNextRecurrenceInEvent(recurrence_rule) {
  let date = null;
  if (null != recurrence_rule.recurrence_rule) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(recurrence_rule.scheduled_start_time);
  }
  return date;
};
export const getNextRecurrenceIdInEvent = function getNextRecurrenceIdInEvent(event) {
  if (null == event) {
    return null;
  } else {
    let date = null;
    if (null != event.recurrence_rule) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(event.scheduled_start_time);
    }
    let fromTimestampResult = null;
    if (null != date) {
      const _Math = Math;
      const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
      SnowflakeUtilsDefault;
      const time = date.getTime();
      const floorResult = floor(time / DurationsDefault.Millis.SECOND);
      fromTimestampResult = fromTimestamp(floorResult * DurationsDefault.Millis.SECOND);
    }
    return fromTimestampResult;
  }
};
export const isValidRecurrence = function isValidRecurrence(start, arg1) {
  if (null != arg1) {
    if (null != start) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(start.start);
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const obj2 = SnowflakeUtilsDefault;
      const date1 = new Date(obj2.extractTimestamp(arg1));
      const uTCHours = date.getUTCHours();
      if (uTCHours === date1.getUTCHours()) {
        const uTCMinutes = date.getUTCMinutes();
        if (uTCMinutes === date1.getUTCMinutes()) {
          const uTCSeconds = date.getUTCSeconds();
          if (uTCSeconds === date1.getUTCSeconds()) {
            const frequency = start.frequency;
            if (_mod9165.RRule.WEEKLY === frequency) {
              const uTCDay = date.getUTCDay();
              return uTCDay === date1.getUTCDay();
            } else if (_mod9165.RRule.YEARLY === frequency) {
              const uTCDate = date.getUTCDate();
              return uTCDate === date1.getUTCDate();
            } else {
              return true;
            }
          }
        }
      }
      return false;
    }
  }
  return false;
};
export { getValidWeekdays };
export { getValidWeekends };
export const recurrenceOptionToRecurrenceRule = function recurrenceOptionToRecurrenceRule(c7, toDate) {
  let bymonth;
  let bymonthday;
  let bynweekday;
  let byweekday;
  let byyearday;
  let count;
  let dtstart;
  let freq;
  let interval;
  let toISOStringResult;
  let until;
  const tmp = getValidWeekdays(toDate);
  const tmp2 = getValidWeekends(toDate);
  const toDateResult = toDate.toDate();
  const uTCDay = toDateResult.getUTCDay();
  const weekday = new _mod9165.Weekday(items6[uTCDay]);
  const toDateResult1 = toDate.toDate();
  const ceilResult = ceil(toDateResult1.getUTCDate() / 7);
  const toDateResult2 = toDate.toDate();
  toDateResult2.setMilliseconds(0);
  let rRule6 = null;
  if (RecurrenceOptions.NONE !== c7) {
    if (RecurrenceOptions.WEEKLY === c7) {
      const obj = { dtstart: toDateResult2, freq: _mod9165.RRule.WEEKLY };
      const RRule6 = _mod9165.RRule;
      const self11 = this;
      const self12 = this;
      rRule6 = new RRule6(obj);
    } else if (RecurrenceOptions.BIWEEKLY === c7) {
      const obj2 = { dtstart: toDateResult2, freq: _mod9165.RRule.WEEKLY, interval: 2 };
      const RRule5 = _mod9165.RRule;
      const self9 = this;
      const self10 = this;
      rRule6 = new RRule5(obj2);
    } else if (RecurrenceOptions.MONTHLY === c7) {
      const obj3 = { dtstart: toDateResult2, freq: _mod9165.RRule.MONTHLY, byweekday: items };
      const RRule4 = _mod9165.RRule;
      items = [weekday.nth(ceilResult)];
      const self7 = this;
      const self8 = this;
      rRule6 = new RRule4(obj3);
    } else if (RecurrenceOptions.YEARLY === c7) {
      const obj4 = { dtstart: toDateResult2, freq: _mod9165.RRule.YEARLY };
      const RRule3 = _mod9165.RRule;
      const self5 = this;
      const self6 = this;
      rRule6 = new RRule3(obj4);
    } else if (RecurrenceOptions.DAILY === c7) {
      const obj5 = { dtstart: toDateResult2, freq: _mod9165.RRule.DAILY };
      const RRule2 = _mod9165.RRule;
      const self3 = this;
      const self4 = this;
      rRule6 = new RRule2(obj5);
    } else if (RecurrenceOptions.WEEKDAY_ONLY === c7) {
      const obj6 = { dtstart: toDateResult2, freq: _mod9165.RRule.DAILY, byweekday: tmp };
      const RRule = _mod9165.RRule;
      const self = this;
      const self2 = this;
      rRule6 = new RRule(obj6);
    } else if (RecurrenceOptions.WEEKEND_ONLY === c7) {
      const obj7 = { dtstart: toDateResult2, freq: _mod9165.RRule.DAILY, byweekday: tmp2 };
      const RRule7 = _mod9165.RRule;
      const self13 = this;
      const self14 = this;
      rRule6 = new RRule7(obj7);
    }
  }
  if (null == rRule6) {
    return null;
  } else {
    const options = rRule6.options;
    ({ dtstart, until, bynweekday } = options);
    let mapped;
    ({ freq, interval, byweekday, bymonth, bymonthday, byyearday, count } = options);
    if (bynweekday != null) {
      mapped = bynweekday.map((item) => ({ n: item[1], day: item[0] }));
    }
    const obj8 = {
      start: dtstart.toISOString(),
      end: toISOStringResult,
      frequency: freq,
      interval,
      byWeekday: byweekday,
      byNWeekday: mapped,
      byMonth: bymonth,
      byMonthDay: bymonthday,
      byYearDay: byyearday,
      count,
    };
    toISOStringResult = undefined;
    if (until != null) {
      toISOStringResult = until.toISOString();
    }
    return obj8;
  }
};
export const recurrenceRuleToOption = function recurrenceRuleToOption(startDate, recurrenceRule) {
  if (null == recurrenceRule) {
    return RecurrenceOptions.NONE;
  } else {
    const tmp13 = getRRule(recurrenceRule);
    const freq = tmp13.options.freq;
    if (_mod9165.RRule.WEEKLY === freq) {
      if (tmp13.options.interval >= 1) {
        let NONE;
        if (tmp13.options.interval <= 2) {
          if (1 === tmp13.options.interval) {
            NONE = RecurrenceOptions.WEEKLY;
          } else {
            NONE = RecurrenceOptions.BIWEEKLY;
          }
        }
        return NONE;
      }
      NONE = RecurrenceOptions.NONE;
    } else if (_mod9165.RRule.YEARLY === freq) {
      return RecurrenceOptions.YEARLY;
    } else if (_mod9165.RRule.MONTHLY === freq) {
      return RecurrenceOptions.MONTHLY;
    } else if (_mod9165.RRule.DAILY === freq) {
      if (null != tmp13.options.byweekday) {
        let DAILY;
        if (0 !== tmp13.options.byweekday.length) {
          const tmp14Result = _mod12;
          if (tmp14Result.isEqual(tmp13.options.byweekday, getValidWeekdays(startDate))) {
            DAILY = RecurrenceOptions.WEEKDAY_ONLY;
          } else {
            const tmp14Result2 = _mod12;
            DAILY = tmp14Result2.isEqual(tmp13.options.byweekday, getValidWeekends(startDate))
              ? RecurrenceOptions.WEEKEND_ONLY
              : RecurrenceOptions.NONE;
          }
        }
        return DAILY;
      }
      DAILY = RecurrenceOptions.DAILY;
    } else {
      return RecurrenceOptions.NONE;
    }
  }
};
export const hasScheduleChanges = function hasScheduleChanges(scheduled_start_time, scheduledStartTime) {
  scheduled_start_time = undefined;
  if (scheduled_start_time != null) {
    scheduled_start_time = scheduled_start_time.scheduled_start_time;
  }
  let tmp2 =
    scheduled_start_time !== scheduledStartTime.scheduledStartTime ||
    scheduled_start_time.scheduled_end_time !== scheduledStartTime.scheduledEndTime;
  if (!tmp2) {
    const obj = _mod12;
    tmp2 = !obj.isEqual(scheduled_start_time.recurrence_rule, scheduledStartTime.recurrenceRule);
  }
  return tmp2;
};
export const getRecurrenceStatus = function getRecurrenceStatus(eventException, startTime, _Date1) {
  let CANCELED;
  let is_canceled;
  if (eventException != null) {
    is_canceled = eventException.is_canceled;
  }
  if (is_canceled) {
    CANCELED = metroRequire.CANCELED;
  } else if (startTime < _Date1) {
    CANCELED = metroRequire.COMPLETED;
  } else {
    CANCELED = null;
    if (null != eventException) {
      CANCELED = metroRequire.SCHEDULED;
    }
  }
  return CANCELED;
};

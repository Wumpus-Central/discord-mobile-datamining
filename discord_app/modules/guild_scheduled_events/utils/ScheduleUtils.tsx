// === Module 9665: ScheduleUtils ===

// Module 9665 (ScheduleUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import _modDef4153 from "module_4153" /* 4153 */;
import DateUtils from "DateUtils" /* 4242 */;
import m from "m" /* 9667 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getRRule(byWeekday) {
  let tmp = null;
  if (null != byWeekday.byWeekday) {
    items = [];
    HermesBuiltin.arraySpread(byWeekday.byWeekday, 0);
    tmp = items;
  }
  const byNWeekday = byWeekday.byNWeekday;
  if (byNWeekday != null) {
    const mapped = byNWeekday.map((day) => {
      const weekday = new m.Weekday(day.day, day.n);
      return weekday;
    });
  }
  const date = new Date(byWeekday.start);
  date.setMilliseconds(0);
  const obj = { dtstart: date, until: null, freq: null, interval: null, byweekday: null, bymonth: null, bymonthday: null, byyearday: null, count: null };
  let date1 = null;
  if (null != byWeekday.end) {
    const _Date = Date;
    date1 = new Date(byWeekday.end);
  }
  obj.until = date1;
  ({ frequency: obj2.freq, interval: obj2.interval } = byWeekday);
  if (tmp == null) {
    tmp = mapped;
  }
  obj.byweekday = tmp;
  let tmp9 = null;
  if (null != byWeekday.byMonth) {
    items1 = [];
    HermesBuiltin.arraySpread(byWeekday.byMonth, 0);
    tmp9 = items1;
  }
  obj.bymonth = tmp9;
  let tmp12 = null;
  if (null != byWeekday.byMonthDay) {
    items2 = [];
    HermesBuiltin.arraySpread(byWeekday.byMonthDay, 0);
    tmp12 = items2;
  }
  obj.bymonthday = tmp12;
  let tmp15 = null;
  if (null != byWeekday.byYearDay) {
    items3 = [];
    HermesBuiltin.arraySpread(byWeekday.byYearDay, 0);
    tmp15 = items3;
  }
  obj.byyearday = tmp15;
  obj.count = byWeekday.count;
  const rRule = new m.RRule(obj);
  return rRule;
}
function getValidWeekdays(toDate) {
  const day = toDate.toDate().getDay();
  const weekday = new m.Weekday(items6[day]);
  const toDateResult = toDate.toDate();
  const uTCDay = toDate.toDate().getUTCDay();
  const weekday1 = new m.Weekday(items6[uTCDay]);
  if (weekday1.weekday - weekday.weekday > 0) {
    let tmp5 = items2;
  } else {
    tmp5 = weekday1.weekday - weekday.weekday < 0 ? items1 : items;
  }
  return tmp5;
}
function getValidWeekends(toDate) {
  const day = toDate.toDate().getDay();
  const weekday = new m.Weekday(items6[day]);
  const toDateResult = toDate.toDate();
  const uTCDay = toDate.toDate().getUTCDay();
  const weekday1 = new m.Weekday(items6[uTCDay]);
  if (weekday1.weekday - weekday.weekday > 0) {
    let tmp5 = items5;
  } else {
    tmp5 = weekday1.weekday - weekday.weekday < 0 ? items4 : items3;
  }
  return tmp5;
}
const RecurrenceOptions = fn(9666).RecurrenceOptions;
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventEntityTypes: hasOwnProperty, GuildScheduledEventStatus: metroRequire } = GuildScheduledEventsConstants);
let items = [fn(9667).RRule.MO.weekday, fn(9667).RRule.TU.weekday, fn(9667).RRule.WE.weekday, fn(9667).RRule.TH.weekday, fn(9667).RRule.FR.weekday];
let items1 = [fn(9667).RRule.SU.weekday, fn(9667).RRule.MO.weekday, fn(9667).RRule.TU.weekday, fn(9667).RRule.WE.weekday, fn(9667).RRule.TH.weekday];
let items2 = [fn(9667).RRule.TU.weekday, fn(9667).RRule.WE.weekday, fn(9667).RRule.TH.weekday, fn(9667).RRule.FR.weekday, fn(9667).RRule.SA.weekday];
let items3 = [fn(9667).RRule.SA.weekday, fn(9667).RRule.SU.weekday];
const items4 = [fn(9667).RRule.FR.weekday, fn(9667).RRule.SA.weekday];
const items5 = [fn(9667).RRule.SU.weekday, fn(9667).RRule.MO.weekday];
const items6 = [fn(9667).RRule.SU.weekday, fn(9667).RRule.MO.weekday, fn(9667).RRule.TU.weekday, fn(9667).RRule.WE.weekday, fn(9667).RRule.TH.weekday, fn(9667).RRule.FR.weekday, fn(9667).RRule.SA.weekday];
const set = new Set([0, 6]);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/ScheduleUtils.tsx");

export const MAX_DAYS_AHEAD_AN_EVENT_CAN_START = 365;
export const MAX_DAYS_AHEAD_AN_EVENT_CAN_END = 366;
export const MAX_YEARS_AHEAD_RECURRING_EVENT = 4;
export const getRecurrenceOptions = function getRecurrenceOptions(startDate) {
  const toDateResult = startDate.toDate();
  const rounded = Math.ceil(toDateResult.getDate() / 7);
  const formatResult = startDate.format("dddd");
  let obj = { id: "none", value: RecurrenceOptions.NONE, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["0bK0B1"]);
  items = [obj, , , , , ];
  obj = { id: "weekly", value: RecurrenceOptions.WEEKLY, label: null };
  const intl2 = util.intl;
  obj.label = intl2.formatToPlainString(util.t["B8/yfp"], { weekday: formatResult });
  items[1] = obj;
  const obj1 = { id: "biweekly", value: RecurrenceOptions.BIWEEKLY, label: null };
  const intl3 = util.intl;
  obj1.label = intl3.formatToPlainString(util.t["z+aIuX"], { weekday: formatResult });
  items[2] = obj1;
  const obj2 = { id: "monthly", value: RecurrenceOptions.MONTHLY, label: null };
  const intl4 = util.intl;
  obj2.label = intl4.formatToPlainString(util.t.mjOEBk, { nth: rounded, weekday: formatResult });
  items[3] = obj2;
  const obj3 = { id: "yearly", value: RecurrenceOptions.YEARLY, label: null };
  const intl5 = util.intl;
  obj3.label = intl5.formatToPlainString(util.t["5DFcVl"], { date: toDateResult.toLocaleString(util.intl.currentLocale, { month: "short", day: "2-digit" }) });
  items[4] = obj3;
  const obj5 = { id: "daily", value: RecurrenceOptions.DAILY, label: null };
  const intl6 = util.intl;
  obj5.label = intl6.string(util.t.JX8E1E);
  items[5] = obj5;
  if (set.has(toDateResult.getDay())) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      const obj6 = { id: "weekendOnly", value: RecurrenceOptions.WEEKEND_ONLY, label: null };
      const intl8 = util.intl;
      obj6.label = intl8.string(util.t.hRpynV);
      items.push(obj6);
    }
  } else {
    const obj7 = { id: "weekdayOnly", value: RecurrenceOptions.WEEKDAY_ONLY, label: null };
    const intl7 = util.intl;
    obj7.label = intl7.string(util.t["jYR/MY"]);
    items.push(obj7);
  }
  return items;
};
export const getInitialEventStartDate = function getInitialEventStartDate() {
  const addResult = _modDef4153().add(1, "hour");
  const hourResult = addResult.hour();
  let sum = hourResult;
  if (addResult.minutes() >= 30) {
    sum = hourResult + 1;
  }
  const obj = _modDef4153();
  const hourResult1 = addResult.hour(sum);
  return addResult.hour(sum).minutes(0).seconds(0);
};
export const getInitialEventEndDate = function getInitialEventEndDate(arg0) {
  if (null != arg0) {
    let obj = _modDef4153(arg0);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    obj = _modDef4153();
  }
  const addResult = obj.add(1, "hour");
  const result = addResult.minutes() % 60;
  const obj3 = tmp(4153)(addResult);
  return tmp(4153)(addResult).add(60 - result, "minutes").seconds(0);
};
export const getNextBucketedTime = function getNextBucketedTime(minutes, arg1) {
  const diff = arg1 - minutes.minutes() % arg1;
  const obj = _modDef4153(minutes);
  return _modDef4153(minutes).add(diff, "minutes").seconds(0);
};
export const getEventTimeData = function getEventTimeData(scheduled_start_time, toISOStringResult1, arg2) {
  let obj = arg2;
  if (null == arg2) {
    obj = _modDef4153();
  }
  const obj2 = _modDef4153(scheduled_start_time);
  if (null != toISOStringResult1) {
    if ("" !== toISOStringResult1) {
      const obj3 = _modDef4153(toISOStringResult1);
    }
  }
  let isSameResult = null != toISOStringResult1;
  if (isSameResult) {
    isSameResult = obj2.isSame(obj3, "day");
  }
  const obj4 = DateUtils;
  const result = obj4.differenceInCalendarDays(obj2.toDate(), obj.toDate());
  if (result <= 1) {
    if (result >= 0) {
      let tmp6Result = DateUtils;
      let str3 = "nextDay";
      if (result < 1) {
        str3 = "sameDay";
      }
      let dateFormatResult = tmp6Result.dateFormat(obj2, obj2.localeData().calendar(str3, obj2, obj));
      const localeDataResult = obj2.localeData();
    }
    obj = { startDateTimeString: dateFormatResult, endDateTimeString: null, currentOrPastEvent: null, upcomingEvent: null, withinStartWindow: null, diffMinutes: null };
    if (null == obj3) {
      obj.endDateTimeString = undefined;
      obj.currentOrPastEvent = obj2 <= obj;
      obj.upcomingEvent = obj2 <= _modDef4153().add(1, "hour");
      const obj10 = _modDef4153();
      obj.withinStartWindow = obj2 <= _modDef4153().add(15, "minute");
      obj.diffMinutes = obj2.diff(obj, "minutes");
      return obj;
    } else if (isSameResult) {
      let formatResult = obj3.format("LT");
    } else {
      tmp6Result = DateUtils;
      value = obj3.get("years");
      let str6 = "ddd MMM Do, YYYY \u00B7 LT";
      if (value === obj.get("years")) {
        str6 = "ddd MMM Do \u00B7 LT";
      }
      formatResult = tmp6Result.dateFormat(obj3, str6);
    }
  }
  const toDateResult = obj2.toDate();
  value = obj2.get("years");
  let str4 = "ddd MMM Do, YYYY \u00B7 LT";
  if (value === obj.get("years")) {
    str4 = "ddd MMM Do \u00B7 LT";
  }
  dateFormatResult = DateUtils.dateFormat(obj2, str4);
  const tmp6Result1 = DateUtils;
};
export const convertJSDayToRRuleDay = function convertJSDayToRRuleDay(arg0) {
  const weekday = new m.Weekday(items6[arg0]);
  return weekday;
};
export const getBaseScheduleForRecurrence = function getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guildEvent) {
  ({ scheduled_start_time, scheduled_end_time } = guildEvent);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: _modDef4153(scheduled_start_time), endDate: "a" };
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = _modDef4153(scheduled_end_time);
      tmp = obj;
    }
  }
  const tmp4 = _modDef4153;
  const startDate = tmp4(SnowflakeUtilsDefault.extractTimestamp(nextRecurrenceIdInEvent));
  let endDate;
  if (tmp != null) {
    endDate = tmp.endDate;
  }
  endDate = undefined;
  if (null != endDate) {
    endDate = tmp.endDate;
    endDate = startDate.clone().add(endDate.diff(tmp.startDate));
    const cloneResult = startDate.clone();
  }
  return { startDate, endDate };
};
export const getScheduleForRecurrenceWithException = function getScheduleForRecurrenceWithException(baseScheduleForRecurrence, scheduled_end_time) {
  if (null == scheduled_end_time) {
    return baseScheduleForRecurrence;
  } else {
    let endDate = scheduled_end_time.scheduled_end_time;
    if (endDate == null) {
      endDate = baseScheduleForRecurrence.endDate;
    }
    if (null != scheduled_end_time.scheduled_start_time) {
      let startDate = _modDef4153(scheduled_end_time.scheduled_start_time);
    } else {
      startDate = baseScheduleForRecurrence.startDate;
    }
    const obj = { startDate, endDate: null };
    let tmp3;
    if (null != endDate) {
      tmp3 = _modDef4153(endDate);
    }
    obj.endDate = tmp3;
    return obj;
  }
};
export const getScheduleFromEventData = function getScheduleFromEventData(arg0) {
  ({ scheduledStartTime, scheduledEndTime } = arg0);
  let tmp;
  if (null != scheduledStartTime) {
    const obj = { startDate: _modDef4153(scheduledStartTime), endDate: "a" };
    tmp = obj;
    if (null != scheduledEndTime) {
      obj.endDate = _modDef4153(scheduledEndTime);
      tmp = obj;
    }
  }
  return tmp;
};
export const getScheduleFromEvent = function getScheduleFromEvent(arg0) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: _modDef4153(scheduled_start_time), endDate: "a" };
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = _modDef4153(scheduled_end_time);
      tmp = obj;
    }
  }
  return tmp;
};
export const hasValidSchedule = function hasValidSchedule(arg0, arg1) {
  ({ startDate, endDate } = arg0);
  let tmp = null != startDate;
  if (tmp) {
    let tmp4 = startDate >= _modDef4153();
    if (tmp4) {
      let tmp6 = !tmp5;
      if (!(null != endDate && endDate < startDate)) {
        tmp6 = arg1 !== constants.EXTERNAL || null != endDate;
        const tmp9 = arg1 !== constants.EXTERNAL || null != endDate;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const areDatesIdentical = function areDatesIdentical(endDate, endDate2) {
  if (null != endDate) {
    if (null != endDate2) {
      let isSameResult = endDate.isSame(endDate2);
    }
    return isSameResult;
  }
  isSameResult = null == endDate && null == endDate2;
};
export const areSchedulesIdentical = function areSchedulesIdentical(startDate, baseScheduleForRecurrence) {
  if (null != startDate) {
    if (null != baseScheduleForRecurrence) {
      startDate = startDate.startDate;
      const startDate2 = baseScheduleForRecurrence.startDate;
      if (null != startDate) {
        if (null != startDate2) {
          let isSameResult = startDate.isSame(startDate2);
        }
        if (isSameResult) {
          const endDate = startDate.endDate;
          const endDate2 = baseScheduleForRecurrence.endDate;
          if (null != endDate) {
            if (null != endDate2) {
              let isSameResult1 = endDate.isSame(endDate2);
            }
          }
          isSameResult1 = null == endDate && null == endDate2;
          const tmp4 = null == endDate && null == endDate2;
        }
      }
      isSameResult = null == startDate && null == startDate2;
      const tmp2 = null == startDate && null == startDate2;
    }
    return isSameResult;
  }
  isSameResult = null == startDate && null == baseScheduleForRecurrence;
};
export { getRRule };
export const generateNextRecurrences = function generateNextRecurrences(length, rRule, date, arg3) {
  closure_0 = length;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  date = new Date();
  let date1 = date;
  if (date <= date) {
    const _Date = Date;
    date1 = new Date();
  }
  const date2 = new Date();
  date2.setFullYear(date2.getFullYear() + 4);
  const betweenResult = rRule.between(date1, date2, true, (arg0, arg1) => arg1 < closure_0 + 1);
  if (flag) {
    if (betweenResult.length > 0) {
      const first = betweenResult[0];
      const time = date.getTime();
      if (time === first.getTime()) {
        let substr = betweenResult.slice(1);
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
      date = new Date(event.scheduled_start_time);
    }
    let fromTimestampResult = null;
    if (null != date) {
      const _Math = Math;
      const time = date.getTime();
      const rounded = Math.floor(time / DurationsDefault.Millis.SECOND);
      fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(rounded * DurationsDefault.Millis.SECOND);
    }
    return fromTimestampResult;
  }
};
export const isValidRecurrence = function isValidRecurrence(start, arg1) {
  if (null != arg1) {
    if (null != start) {
      const _Date = Date;
      const date = new Date(start.start);
      const _Date2 = Date;
      const date1 = new Date(SnowflakeUtilsDefault.extractTimestamp(arg1));
      const uTCHours = date.getUTCHours();
      if (uTCHours === date1.getUTCHours()) {
        const uTCMinutes = date.getUTCMinutes();
        if (uTCMinutes === date1.getUTCMinutes()) {
          const uTCSeconds = date.getUTCSeconds();
          if (uTCSeconds === date1.getUTCSeconds()) {
            const frequency = start.frequency;
            if (m.RRule.WEEKLY === frequency) {
              const uTCDay = date.getUTCDay();
              return uTCDay === date1.getUTCDay();
            } else if (m.RRule.YEARLY === frequency) {
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
  const tmp = getValidWeekdays(toDate);
  const tmp2 = getValidWeekends(toDate);
  const uTCDay = toDate.toDate().getUTCDay();
  const weekday = new m.Weekday(items6[uTCDay]);
  const toDateResult = toDate.toDate();
  const rounded = Math.ceil(toDate.toDate().getUTCDate() / 7);
  const toDateResult2 = toDate.toDate();
  toDateResult2.setMilliseconds(0);
  let rRule = null;
  if (RecurrenceOptions.NONE !== c7) {
    if (RecurrenceOptions.WEEKLY === c7) {
      let obj = { dtstart: toDateResult2, freq: m.RRule.WEEKLY };
      rRule = new m.RRule(obj);
    } else if (RecurrenceOptions.BIWEEKLY === c7) {
      obj = { dtstart: toDateResult2, freq: m.RRule.WEEKLY, interval: 2 };
      rRule = new m.RRule(obj);
    } else if (RecurrenceOptions.MONTHLY === c7) {
      const obj1 = { dtstart: toDateResult2, freq: m.RRule.MONTHLY, byweekday: null };
      items = [weekday.nth(rounded)];
      obj1.byweekday = items;
      rRule = new m.RRule(obj1);
    } else if (RecurrenceOptions.YEARLY === c7) {
      const obj2 = { dtstart: toDateResult2, freq: m.RRule.YEARLY };
      rRule = new m.RRule(obj2);
    } else if (RecurrenceOptions.DAILY === c7) {
      const obj3 = { dtstart: toDateResult2, freq: m.RRule.DAILY };
      rRule = new m.RRule(obj3);
    } else if (RecurrenceOptions.WEEKDAY_ONLY === c7) {
      const obj4 = { dtstart: toDateResult2, freq: m.RRule.DAILY, byweekday: tmp };
      rRule = new m.RRule(obj4);
    } else if (RecurrenceOptions.WEEKEND_ONLY === c7) {
      const obj5 = { dtstart: toDateResult2, freq: m.RRule.DAILY, byweekday: tmp2 };
      rRule = new m.RRule(obj5);
    }
  }
  if (null == rRule) {
    return null;
  } else {
    const options = rRule.options;
    ({ dtstart, until, bynweekday } = options);
    let mapped;
    ({ freq, interval, byweekday, bymonth, bymonthday, byyearday, count } = options);
    if (bynweekday != null) {
      mapped = bynweekday.map((item) => ({ n: item[1], day: item[0] }));
    }
    const obj6 = { start: dtstart.toISOString(), end: null, frequency: null, interval: null, byWeekday: null, byNWeekday: null, byMonth: null, byMonthDay: null, byYearDay: null, count: null };
    let toISOStringResult;
    if (until != null) {
      toISOStringResult = until.toISOString();
    }
    obj6.end = toISOStringResult;
    obj6.frequency = freq;
    obj6.interval = interval;
    obj6.byWeekday = byweekday;
    obj6.byNWeekday = mapped;
    obj6.byMonth = bymonth;
    obj6.byMonthDay = bymonthday;
    obj6.byYearDay = byyearday;
    obj6.count = count;
    return obj6;
  }
  const toDateResult1 = toDate.toDate();
};
export const recurrenceRuleToOption = function recurrenceRuleToOption(startDate, recurrenceRule) {
  if (null == recurrenceRule) {
    return RecurrenceOptions.NONE;
  } else {
    const tmp13 = getRRule(recurrenceRule);
    const freq = tmp13.options.freq;
    if (m.RRule.WEEKLY === freq) {
      if (tmp13.options.interval >= 1) {
        if (tmp13.options.interval <= 2) {
          if (1 === tmp13.options.interval) {
            let NONE = RecurrenceOptions.WEEKLY;
          } else {
            NONE = RecurrenceOptions.BIWEEKLY;
          }
        }
        return NONE;
      }
      NONE = RecurrenceOptions.NONE;
    } else if (m.RRule.YEARLY === freq) {
      return RecurrenceOptions.YEARLY;
    } else if (m.RRule.MONTHLY === freq) {
      return RecurrenceOptions.MONTHLY;
    } else if (m.RRule.DAILY === freq) {
      if (null != tmp13.options.byweekday) {
        if (0 !== tmp13.options.byweekday.length) {
          let tmp14Result = _mod12;
          if (tmp14Result.isEqual(tmp13.options.byweekday, getValidWeekdays(startDate))) {
            let DAILY = RecurrenceOptions.WEEKDAY_ONLY;
          } else {
            tmp14Result = _mod12;
            DAILY = tmp14Result.isEqual(tmp13.options.byweekday, getValidWeekends(startDate)) ? RecurrenceOptions.WEEKEND_ONLY : RecurrenceOptions.NONE;
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
  let tmp2 = scheduled_start_time !== scheduledStartTime.scheduledStartTime || scheduled_start_time.scheduled_end_time !== scheduledStartTime.scheduledEndTime;
  if (!tmp2) {
    tmp2 = !_mod12.isEqual(scheduled_start_time.recurrence_rule, scheduledStartTime.recurrenceRule);
  }
  return tmp2;
};
export const getRecurrenceStatus = function getRecurrenceStatus(eventException, startTime, date) {
  let is_canceled;
  if (eventException != null) {
    is_canceled = eventException.is_canceled;
  }
  if (is_canceled) {
    let CANCELED = constants2.CANCELED;
  } else if (startTime < date) {
    CANCELED = constants2.COMPLETED;
  } else {
    CANCELED = null;
    if (null != eventException) {
      CANCELED = constants2.SCHEDULED;
    }
  }
  return CANCELED;
};
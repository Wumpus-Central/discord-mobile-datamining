// discord_app/modules/guild_scheduled_events/utils/ScheduleUtils.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import apply from "../../../../_runtime/00012_apply.js";
import obj132Default from "../../../utils/Durations.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import tDefault from "../../../../_runtime/03975_t.js";
import resetCache from "../../../utils/DateUtils.tsx";
import m from "../../../../_runtime/08787_m.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { RecurrenceOptions } from "../CreateGuildScheduledEventConstants.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "../GuildScheduledEventsConstants.tsx";

require = fn;
function getRRule(closure_2) {
  let tmp = null;
  if (null != dependencyMap.byWeekday) {
    items = [];
    HermesBuiltin.arraySpread(dependencyMap.byWeekday, 0);
    tmp = items;
  }
  const byNWeekday = dependencyMap.byNWeekday;
  if (byNWeekday != null) {
    const mapped = byNWeekday.map((item, index) => {
      const weekday = new callback(table[3]).Weekday(item.day, item.n);
      return weekday;
    });
  }
  const date = new Date(dependencyMap.start);
  date.setMilliseconds(0);
  const obj = { dtstart: date, until: null, freq: null, interval: null, byweekday: null, bymonth: null, bymonthday: null, byyearday: null, count: null };
  let date1 = null;
  if (null != dependencyMap.end) {
    const _Date = Date;
    date1 = new Date(dependencyMap.end);
  }
  obj[1] = date1;
  ({ frequency: obj2[2], interval: obj2[3] } = dependencyMap);
  if (tmp == null) {
    tmp = mapped;
  }
  obj[4] = tmp;
  let tmp9 = null;
  if (null != dependencyMap.byMonth) {
    items1 = [];
    HermesBuiltin.arraySpread(dependencyMap.byMonth, 0);
    tmp9 = items1;
  }
  obj[5] = tmp9;
  let tmp12 = null;
  if (null != dependencyMap.byMonthDay) {
    items2 = [];
    HermesBuiltin.arraySpread(dependencyMap.byMonthDay, 0);
    tmp12 = items2;
  }
  obj[6] = tmp12;
  let tmp15 = null;
  if (null != dependencyMap.byYearDay) {
    items3 = [];
    HermesBuiltin.arraySpread(dependencyMap.byYearDay, 0);
    tmp15 = items3;
  }
  obj[7] = tmp15;
  obj[8] = dependencyMap.count;
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
({ GuildScheduledEventEntityTypes: c5, GuildScheduledEventStatus: closure_6 } = GUILD_EVENT_MAX_NAME_LENGTH);
let items = [require("m").RRule.MO.weekday, require("m").RRule.TU.weekday, require("m").RRule.WE.weekday, require("m").RRule.TH.weekday, require("m").RRule.FR.weekday];
let items1 = [require("m").RRule.SU.weekday, require("m").RRule.MO.weekday, require("m").RRule.TU.weekday, require("m").RRule.WE.weekday, require("m").RRule.TH.weekday];
let items2 = [require("m").RRule.TU.weekday, require("m").RRule.WE.weekday, require("m").RRule.TH.weekday, require("m").RRule.FR.weekday, require("m").RRule.SA.weekday];
let items3 = [require("m").RRule.SA.weekday, require("m").RRule.SU.weekday];
const items4 = [require("m").RRule.FR.weekday, require("m").RRule.SA.weekday];
const items5 = [require("m").RRule.SU.weekday, require("m").RRule.MO.weekday];
const items6 = [require("m").RRule.SU.weekday, require("m").RRule.MO.weekday, require("m").RRule.TU.weekday, require("m").RRule.WE.weekday, require("m").RRule.TH.weekday, require("m").RRule.FR.weekday, require("m").RRule.SA.weekday];
const set = new Set([0, 6]);
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/utils/ScheduleUtils.tsx");

export const MAX_DAYS_AHEAD_AN_EVENT_CAN_START = 365;
export const MAX_DAYS_AHEAD_AN_EVENT_CAN_END = 366;
export const MAX_YEARS_AHEAD_RECURRING_EVENT = 4;
export const getRecurrenceOptions = function getRecurrenceOptions(startDate) {
  const toDateResult = startDate.toDate();
  const rounded = Math.ceil(toDateResult.getDate() / 7);
  const formatResult = startDate.format("dddd");
  let obj = { id: "none", value: RecurrenceOptions.NONE, label: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["0bK0B1"]);
  items = [obj, , , , , ];
  obj = { id: "weekly", value: RecurrenceOptions.WEEKLY, label: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.formatToPlainString(getSystemLocale.t["B8/yfp"], { weekday: formatResult });
  items[1] = obj;
  obj1 = { id: "biweekly", value: RecurrenceOptions.BIWEEKLY, label: null };
  const intl3 = getSystemLocale.intl;
  obj1[2] = intl3.formatToPlainString(getSystemLocale.t["z+aIuX"], { weekday: formatResult });
  items[2] = obj1;
  const obj2 = { id: "monthly", value: RecurrenceOptions.MONTHLY, label: null };
  const intl4 = getSystemLocale.intl;
  obj2[2] = intl4.formatToPlainString(getSystemLocale.t.mjOEBk, { nth: rounded, weekday: formatResult });
  items[3] = obj2;
  const obj3 = { id: "yearly", value: RecurrenceOptions.YEARLY, label: null };
  const intl5 = getSystemLocale.intl;
  obj3[2] = intl5.formatToPlainString(getSystemLocale.t["5DFcVl"], { date: toDateResult.toLocaleString(getSystemLocale.intl.currentLocale, { month: "short", day: "2-digit" }) });
  items[4] = obj3;
  const obj5 = { id: "daily", value: RecurrenceOptions.DAILY, label: null };
  const intl6 = getSystemLocale.intl;
  obj5[2] = intl6.string(getSystemLocale.t.JX8E1E);
  items[5] = obj5;
  if (set.has(toDateResult.getDay())) {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      const obj6 = { id: "weekendOnly", value: null, label: null };
      obj6[1] = RecurrenceOptions.WEEKEND_ONLY;
      const intl8 = getSystemLocale.intl;
      obj6[2] = intl8.string(getSystemLocale.t.hRpynV);
      items.push(obj6);
    }
  } else {
    const obj7 = { id: "weekdayOnly", value: null, label: null };
    obj7[1] = RecurrenceOptions.WEEKDAY_ONLY;
    const intl7 = getSystemLocale.intl;
    obj7[2] = intl7.string(getSystemLocale.t["jYR/MY"]);
    items.push(obj7);
  }
  return items;
};
export const getInitialEventStartDate = function getInitialEventStartDate() {
  const addResult = tDefault().add(1, "hour");
  const hourResult = addResult.hour();
  let sum = hourResult;
  if (addResult.minutes() >= 30) {
    sum = hourResult + 1;
  }
  const obj = tDefault();
  const hourResult1 = addResult.hour(sum);
  return addResult.hour(sum).minutes(0).seconds(0);
};
export const getInitialEventEndDate = function getInitialEventEndDate(arg0) {
  if (null != arg0) {
    let obj = tDefault(arg0);
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    obj = tDefault();
  }
  const addResult = obj.add(1, "hour");
  const result = addResult.minutes() % 60;
  const obj3 = tmp(3975)(addResult);
  return tmp(3975)(addResult).add(60 - result, "minutes").seconds(0);
};
export const getNextBucketedTime = function getNextBucketedTime(minutes) {
  const diff = arg1 - minutes.minutes() % arg1;
  const obj = tDefault(minutes);
  return tDefault(minutes).add(diff, "minutes").seconds(0);
};
export const getEventTimeData = function getEventTimeData(scheduled_start_time, toISOStringResult1) {
  let obj = arg2;
  if (null == arg2) {
    obj = tDefault();
  }
  const obj2 = tDefault(scheduled_start_time);
  if (null != toISOStringResult1) {
    if ("" !== toISOStringResult1) {
      const obj3 = tDefault(toISOStringResult1);
    }
  }
  let isSameResult = null != toISOStringResult1;
  if (isSameResult) {
    isSameResult = obj2.isSame(obj3, "day");
  }
  const obj4 = resetCache;
  const result = obj4.differenceInCalendarDays(obj2.toDate(), obj.toDate());
  if (result <= 1) {
    if (result >= 0) {
      let tmp6Result = resetCache;
      let str3 = "nextDay";
      if (result < 1) {
        str3 = "sameDay";
      }
      let dateFormatResult = tmp6Result.dateFormat(obj2, obj2.localeData().calendar(str3, obj2, obj));
      const localeDataResult = obj2.localeData();
    }
    obj = { startDateTimeString: null, endDateTimeString: null, currentOrPastEvent: null, upcomingEvent: null, withinStartWindow: null, diffMinutes: null };
    obj[0] = dateFormatResult;
    if (null == obj3) {
      obj[1] = undefined;
      obj[2] = obj2 <= obj;
      obj[3] = obj2 <= tDefault().add(1, "hour");
      const obj10 = tDefault();
      obj[4] = obj2 <= tDefault().add(15, "minute");
      obj[5] = obj2.diff(obj, "minutes");
      return obj;
    } else if (isSameResult) {
      let formatResult = obj3.format("LT");
    } else {
      tmp6Result = resetCache;
      let value = obj3.get("years");
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
  dateFormatResult = resetCache.dateFormat(obj2, str4);
  const tmp6Result1 = resetCache;
};
export const convertJSDayToRRuleDay = function convertJSDayToRRuleDay(arg0) {
  const weekday = new m.Weekday(items6[arg0]);
  return weekday;
};
export const getBaseScheduleForRecurrence = function getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guildEvent) {
  ({ scheduled_start_time, scheduled_end_time } = guildEvent);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: null, endDate: "a" };
    obj[0] = tDefault(scheduled_start_time);
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = tDefault(scheduled_end_time);
      tmp = obj;
    }
  }
  const tmp4 = tDefault;
  const startDate = tmp4(DISCORD_EPOCHDefault.extractTimestamp(nextRecurrenceIdInEvent));
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
      let startDate = tDefault(scheduled_end_time.scheduled_start_time);
    } else {
      startDate = baseScheduleForRecurrence.startDate;
    }
    const obj = { startDate: null, endDate: null };
    obj[0] = startDate;
    let tmp3;
    if (null != endDate) {
      tmp3 = tDefault(endDate);
    }
    obj[1] = tmp3;
    return obj;
  }
};
export const getScheduleFromEventData = function getScheduleFromEventData(arg0) {
  ({ scheduledStartTime, scheduledEndTime } = arg0);
  let tmp;
  if (null != scheduledStartTime) {
    const obj = { startDate: null, endDate: "a" };
    obj[0] = tDefault(scheduledStartTime);
    tmp = obj;
    if (null != scheduledEndTime) {
      obj.endDate = tDefault(scheduledEndTime);
      tmp = obj;
    }
  }
  return tmp;
};
export const getScheduleFromEvent = function getScheduleFromEvent(arg0) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  let tmp;
  if (null != scheduled_start_time) {
    const obj = { startDate: null, endDate: "a" };
    obj[0] = tDefault(scheduled_start_time);
    tmp = obj;
    if (null != scheduled_end_time) {
      obj.endDate = tDefault(scheduled_end_time);
      tmp = obj;
    }
  }
  return tmp;
};
export const hasValidSchedule = function hasValidSchedule(arg0, arg1) {
  ({ startDate, endDate } = arg0);
  let tmp = null != startDate;
  if (tmp) {
    let tmp4 = startDate >= tDefault();
    if (tmp4) {
      let tmp6 = !tmp5;
      if (!(null != endDate && endDate < startDate)) {
        tmp6 = arg1 !== constants.EXTERNAL || null != endDate;
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
export const areSchedulesIdentical = function areSchedulesIdentical(closure_1_5, baseScheduleForRecurrence) {
  if (null != closure_1_5) {
    if (null != baseScheduleForRecurrence) {
      const startDate = closure_1_5.startDate;
      const startDate2 = baseScheduleForRecurrence.startDate;
      if (null != startDate) {
        if (null != startDate2) {
          let isSameResult = startDate.isSame(startDate2);
        }
        if (isSameResult) {
          const endDate = closure_1_5.endDate;
          const endDate2 = baseScheduleForRecurrence.endDate;
          if (null != endDate) {
            if (null != endDate2) {
              let isSameResult1 = endDate.isSame(endDate2);
            }
          }
          isSameResult1 = null == endDate && null == endDate2;
        }
      }
      isSameResult = null == startDate && null == startDate2;
    }
    return isSameResult;
  }
  isSameResult = null == closure_1_5 && null == baseScheduleForRecurrence;
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
      const rounded = Math.floor(time / obj132Default.Millis.SECOND);
      fromTimestampResult = DISCORD_EPOCHDefault.fromTimestamp(rounded * obj132Default.Millis.SECOND);
    }
    return fromTimestampResult;
  }
};
export const isValidRecurrence = function isValidRecurrence(start) {
  if (null != arg1) {
    if (null != start) {
      const _Date = Date;
      const date = new Date(start.start);
      const _Date2 = Date;
      const date1 = new Date(DISCORD_EPOCHDefault.extractTimestamp(arg1));
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
      let obj = { dtstart: null, freq: null };
      obj[0] = toDateResult2;
      obj[1] = m.RRule.WEEKLY;
      rRule = new m.RRule(obj);
    } else if (RecurrenceOptions.BIWEEKLY === c7) {
      obj = { dtstart: null, freq: null, interval: 2 };
      obj[0] = toDateResult2;
      obj[1] = m.RRule.WEEKLY;
      rRule = new m.RRule(obj);
    } else if (RecurrenceOptions.MONTHLY === c7) {
      obj1 = { dtstart: null, freq: null, byweekday: null };
      obj1[0] = toDateResult2;
      obj1[1] = m.RRule.MONTHLY;
      items = [weekday.nth(rounded)];
      obj1[2] = items;
      rRule = new m.RRule(obj1);
    } else if (RecurrenceOptions.YEARLY === c7) {
      const obj2 = { dtstart: null, freq: null };
      obj2[0] = toDateResult2;
      obj2[1] = m.RRule.YEARLY;
      rRule = new m.RRule(obj2);
    } else if (RecurrenceOptions.DAILY === c7) {
      const obj3 = { dtstart: null, freq: null };
      obj3[0] = toDateResult2;
      obj3[1] = m.RRule.DAILY;
      rRule = new m.RRule(obj3);
    } else if (RecurrenceOptions.WEEKDAY_ONLY === c7) {
      const obj4 = { dtstart: null, freq: null, byweekday: null };
      obj4[0] = toDateResult2;
      obj4[1] = m.RRule.DAILY;
      obj4[2] = tmp;
      rRule = new m.RRule(obj4);
    } else if (RecurrenceOptions.WEEKEND_ONLY === c7) {
      const obj5 = { dtstart: null, freq: null, byweekday: null };
      obj5[0] = toDateResult2;
      obj5[1] = m.RRule.DAILY;
      obj5[2] = tmp2;
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
      mapped = bynweekday.map((item, index) => ({ n: item[1], day: item[0] }));
    }
    const obj6 = { start: null, end: null, frequency: null, interval: null, byWeekday: null, byNWeekday: null, byMonth: null, byMonthDay: null, byYearDay: null, count: null };
    obj6[0] = dtstart.toISOString();
    let toISOStringResult;
    if (until != null) {
      toISOStringResult = until.toISOString();
    }
    obj6[1] = toISOStringResult;
    obj6[2] = freq;
    obj6[3] = interval;
    obj6[4] = byweekday;
    obj6[5] = mapped;
    obj6[6] = bymonth;
    obj6[7] = bymonthday;
    obj6[8] = byyearday;
    obj6[9] = count;
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
          let tmp14Result = apply;
          if (tmp14Result.isEqual(tmp13.options.byweekday, getValidWeekdays(startDate))) {
            let DAILY = RecurrenceOptions.WEEKDAY_ONLY;
          } else {
            tmp14Result = apply;
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
export const hasScheduleChanges = function hasScheduleChanges(closure_1, scheduledStartTime) {
  let scheduled_start_time;
  if (importDefault != null) {
    scheduled_start_time = importDefault.scheduled_start_time;
  }
  let tmp2 = scheduled_start_time !== scheduledStartTime.scheduledStartTime || importDefault.scheduled_end_time !== scheduledStartTime.scheduledEndTime;
  if (!tmp2) {
    tmp2 = !apply.isEqual(importDefault.recurrence_rule, scheduledStartTime.recurrenceRule);
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
// === Module 9201: useEventSchedule ===

// Module 9201 (useEventSchedule)
import react from "react" /* 576 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import useEventException from "useEventException" /* 9202 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useEventExceptionDefault = useEventException;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(id, arg1) {
  let date;
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  const obj = react;
  const cResult = obj.c(7);
  if (cResult[0] === id) {
    let tmp4;
    let tmp8;
    if (cResult[1] === arg1) {
      tmp4 = cResult[2];
    }
    const tmp7 = useEventExceptionDefault(tmp4, id.id);
    if (cResult[3] === id) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp4) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    if (null != id.recurrence_rule) {
      let obj2;
      if (null != tmp4) {
        const tmpResult = ScheduleUtils;
        const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(tmp4, id);
        const tmpResult3 = ScheduleUtils;
        const scheduleForRecurrenceWithException = tmpResult3.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp7);
        ({ startDate, endDate } = scheduleForRecurrenceWithException);
        obj2 = { startTime: startDate.toDate(), endTime: toDateResult };
        toDateResult = undefined;
        if (endDate != null) {
          toDateResult = endDate.toDate();
        }
      }
      cResult[3] = id;
      cResult[4] = tmp7;
      cResult[5] = tmp4;
      cResult[6] = obj2;
      tmp8 = obj2;
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { startTime: date, endTime: date1 };
    date1 = null;
    date = new Date(id.scheduled_start_time);
    if (null != id.scheduled_end_time) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(id.scheduled_end_time);
    }
    obj2 = obj3;
  }
  let nextRecurrenceIdInEvent = arg1;
  if (arg1 == null) {
    const tmpResult4 = ScheduleUtils;
    nextRecurrenceIdInEvent = tmpResult4.getNextRecurrenceIdInEvent(id);
  }
  cResult[0] = id;
  cResult[1] = arg1;
  cResult[2] = nextRecurrenceIdInEvent;
  tmp4 = nextRecurrenceIdInEvent;
}) : (function(recurrence_rule, nextRecurrenceIdInEvent) {
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  if (nextRecurrenceIdInEvent == null) {
    const obj = ScheduleUtils;
    nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(recurrence_rule);
  }
  if (null != recurrence_rule.recurrence_rule) {
    let obj4;
    if (null != nextRecurrenceIdInEvent) {
      const obj2 = ScheduleUtils;
      const baseScheduleForRecurrence = obj2.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, recurrence_rule);
      const obj3 = ScheduleUtils;
      const scheduleForRecurrenceWithException = obj3.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp5);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj4 = { startTime: startDate.toDate(), endTime: toDateResult };
      toDateResult = undefined;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
    }
    return obj4;
  }
  const obj5 = { startTime: new Date(recurrence_rule.scheduled_start_time), endTime: date1 };
  date1 = null;
  new Date(recurrence_rule.scheduled_start_time);
  if (null != recurrence_rule.scheduled_end_time) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(recurrence_rule.scheduled_end_time);
  }
  obj4 = obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1) {
  let closure_0;
  let date;
  let date1;
  let endDate;
  let first;
  let startDate;
  let tmp6;
  let toDateResult;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    let tmp8;
    if (cResult[4] === arg1) {
      tmp8 = cResult[5];
    }
    let id;
    const tmp11 = useEventExceptionDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const tmp11Result = tmp11(tmp8, id);
    let tmp15 = null;
    if (null != stateFromStores) {
      let tmp16;
      if (cResult[6] === tmp11Result) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === tmp8) {
            tmp16 = cResult[9];
          }
          tmp15 = tmp16;
        }
      }
      if (null != stateFromStores.recurrence_rule) {
        let obj2;
        if (null != tmp8) {
          const tmpResult4 = require("ScheduleUtils");
          const baseScheduleForRecurrence = tmpResult4.getBaseScheduleForRecurrence(tmp8, stateFromStores);
          const tmpResult5 = require("ScheduleUtils");
          const scheduleForRecurrenceWithException = tmpResult5.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp11Result);
          ({ startDate, endDate } = scheduleForRecurrenceWithException);
          obj2 = { startTime: startDate.toDate(), endTime: toDateResult };
          toDateResult = undefined;
          if (endDate != null) {
            toDateResult = endDate.toDate();
          }
        }
        cResult[6] = tmp11Result;
        cResult[7] = stateFromStores;
        cResult[8] = tmp8;
        cResult[9] = obj2;
        tmp16 = obj2;
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj3 = { startTime: date, endTime: date1 };
      date1 = null;
      date = new Date(stateFromStores.scheduled_start_time);
      if (null != stateFromStores.scheduled_end_time) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date1 = new Date(stateFromStores.scheduled_end_time);
      }
      obj2 = obj3;
    }
    return tmp15;
  }
  let nextRecurrenceIdInEvent = arg1;
  if (arg1 == null) {
    const tmpResult6 = require("ScheduleUtils");
    nextRecurrenceIdInEvent = tmpResult6.getNextRecurrenceIdInEvent(stateFromStores);
  }
  cResult[3] = stateFromStores;
  cResult[4] = arg1;
  cResult[5] = nextRecurrenceIdInEvent;
  tmp8 = nextRecurrenceIdInEvent;
}) : (function(arg0, nextRecurrenceIdInEvent) {
  let closure_0;
  let date;
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(closure_0));
  if (nextRecurrenceIdInEvent == null) {
    const tmp2Result = require("ScheduleUtils");
    nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(stateFromStores);
  }
  useEventExceptionDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp7 = null;
  if (null != stateFromStores) {
    if (null != stateFromStores.recurrence_rule) {
      let obj2;
      if (null != nextRecurrenceIdInEvent) {
        const tmp2Result3 = require("ScheduleUtils");
        const baseScheduleForRecurrence = tmp2Result3.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
        const tmp2Result4 = require("ScheduleUtils");
        const scheduleForRecurrenceWithException = tmp2Result4.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp6);
        ({ startDate, endDate } = scheduleForRecurrenceWithException);
        obj2 = { startTime: startDate.toDate(), endTime: toDateResult };
        toDateResult = undefined;
        if (endDate != null) {
          toDateResult = endDate.toDate();
        }
      }
      tmp7 = obj2;
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { startTime: date, endTime: date1 };
    date1 = null;
    date = new Date(stateFromStores.scheduled_start_time);
    if (null != stateFromStores.scheduled_end_time) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(stateFromStores.scheduled_end_time);
    }
    obj2 = obj3;
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default tmp2;
export const useEventScheduleById = tmp3;
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  useEventException;
  if (null != guildEvent.recurrence_rule) {
    let obj;
    if (null != recurrenceId) {
      const tmpResult = ScheduleUtils;
      const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      const tmpResult2 = ScheduleUtils;
      const scheduleForRecurrenceWithException = tmpResult2.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp4);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj = { startTime: startDate.toDate(), endTime: toDateResult };
      toDateResult = undefined;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
    }
    return obj;
  }
  const obj2 = { startTime: new Date(guildEvent.scheduled_start_time), endTime: date1 };
  date1 = null;
  new Date(guildEvent.scheduled_start_time);
  if (null != guildEvent.scheduled_end_time) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(guildEvent.scheduled_end_time);
  }
  obj = obj2;
};
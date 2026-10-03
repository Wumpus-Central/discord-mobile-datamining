// discord_app/modules/guild_scheduled_events/useEventSchedule.tsx
import c from "../../../_runtime/00576_c.js";
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import useEventException from "useEventException.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

const require = globalThis.__r;
const useEventExceptionDefault = useEventException;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      const cResult = c.c(7);
      if (cResult[0] === id) {
        if (cResult[1] === arg1) {
          let tmp4 = cResult[2];
        }
        const tmp7 = useEventExceptionDefault(tmp4, id.id);
        if (cResult[3] === id) {
          if (cResult[4] === tmp7) {
            if (cResult[5] === tmp4) {
              return cResult[6];
            }
          }
        }
        let date1 = null;
        if (null != id.recurrence_rule) {
          if (date1 != tmp4) {
            const baseScheduleForRecurrence = ScheduleUtils.getBaseScheduleForRecurrence(tmp4, id);
            const tmpResult = ScheduleUtils;
            const scheduleForRecurrenceWithException = ScheduleUtils.getScheduleForRecurrenceWithException(
              baseScheduleForRecurrence,
              tmp7,
            );
            ({ startDate, endDate } = scheduleForRecurrenceWithException);
            let obj2 = { startTime: startDate.toDate(), endTime: null };
            let toDateResult;
            if (endDate != date1) {
              toDateResult = endDate.toDate();
            }
            obj2.endTime = toDateResult;
            const tmpResult3 = ScheduleUtils;
          }
          cResult[3] = id;
          cResult[4] = tmp7;
          cResult[5] = tmp4;
          cResult[6] = obj2;
        }
        const obj3 = { startTime: null, endTime: null };
        const _Date = Date;
        const date = new Date(id.scheduled_start_time);
        obj3.startTime = date;
        date1 = null;
        if (tmp17) {
          const _Date2 = Date;
          date1 = new Date(id.scheduled_end_time);
        }
        obj3.endTime = date1;
        obj2 = obj3;
        tmp17 = date1 != id.scheduled_end_time;
      }
      let nextRecurrenceIdInEvent = arg1;
      if (arg1 == null) {
        nextRecurrenceIdInEvent = ScheduleUtils.getNextRecurrenceIdInEvent(id);
        const tmpResult4 = ScheduleUtils;
      }
      cResult[0] = id;
      cResult[1] = arg1;
      cResult[2] = nextRecurrenceIdInEvent;
      tmp4 = nextRecurrenceIdInEvent;
    }
  : (recurrence_rule, nextRecurrenceIdInEvent) => {
      if (nextRecurrenceIdInEvent == null) {
        nextRecurrenceIdInEvent = ScheduleUtils.getNextRecurrenceIdInEvent(recurrence_rule);
      }
      if (null != recurrence_rule.recurrence_rule) {
        if (null != nextRecurrenceIdInEvent) {
          const baseScheduleForRecurrence = ScheduleUtils.getBaseScheduleForRecurrence(
            nextRecurrenceIdInEvent,
            recurrence_rule,
          );
          const scheduleForRecurrenceWithException = ScheduleUtils.getScheduleForRecurrenceWithException(
            baseScheduleForRecurrence,
            tmp5,
          );
          ({ startDate, endDate } = scheduleForRecurrenceWithException);
          let obj4 = { startTime: startDate.toDate(), endTime: null };
          let toDateResult;
          if (endDate != null) {
            toDateResult = endDate.toDate();
          }
          obj4.endTime = toDateResult;
        }
        return obj4;
      }
      const obj5 = { startTime: new Date(recurrence_rule.scheduled_start_time), endTime: null };
      let date1 = null;
      if (null != recurrence_rule.scheduled_end_time) {
        const _Date = Date;
        date1 = new Date(recurrence_rule.scheduled_end_time);
      }
      obj5.endTime = date1;
      obj4 = obj5;
      const date = new Date(recurrence_rule.scheduled_start_time);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default tmp2;
export const useEventScheduleById = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      const cResult = require("c").c(10);
      let date1 = globalThis;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildScheduledEventStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === arg1) {
          let tmp9 = cResult[5];
        }
        let tmp13 = null;
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        const tmp12Result = useEventExceptionDefault(tmp9, id);
        if (tmp13 == stateFromStores) {
          return null;
        } else {
          if (tmp13 != stateFromStores.recurrence_rule) {
            if (tmp13 != tmp9) {
              const baseScheduleForRecurrence = tmp(9163).getBaseScheduleForRecurrence(tmp9, stateFromStores);
              const tmpResult4 = tmp(9163);
              const scheduleForRecurrenceWithException = tmp(9163).getScheduleForRecurrenceWithException(
                baseScheduleForRecurrence,
                tmp12Result,
              );
              ({ startDate, endDate } = scheduleForRecurrenceWithException);
              let obj2 = { startTime: startDate.toDate(), endTime: null };
              let toDateResult;
              if (endDate != tmp13) {
                toDateResult = endDate.toDate();
              }
              obj2.endTime = toDateResult;
              const tmpResult5 = tmp(9163);
            }
            cResult[6] = tmp12Result;
            cResult[7] = stateFromStores;
            cResult[8] = tmp9;
            cResult[9] = obj2;
          }
          const obj3 = { startTime: null, endTime: null };
          const date = new date1.Date(stateFromStores.scheduled_start_time);
          obj3.startTime = date;
          tmp13 = null;
          if (tmp24) {
            date1 = new date1.Date(stateFromStores.scheduled_end_time);
            tmp13 = date1;
          }
          obj3.endTime = tmp13;
          obj2 = obj3;
          tmp24 = tmp13 != stateFromStores.scheduled_end_time;
        }
      }
      let nextRecurrenceIdInEvent = arg1;
      if (arg1 == null) {
        nextRecurrenceIdInEvent = tmp(9163).getNextRecurrenceIdInEvent(stateFromStores);
        const tmpResult6 = tmp(9163);
      }
      cResult[3] = stateFromStores;
      cResult[4] = arg1;
      cResult[5] = nextRecurrenceIdInEvent;
      tmp9 = nextRecurrenceIdInEvent;
      const tmpResult = require("initialize");
    }
  : (arg0, nextRecurrenceIdInEvent) => {
      _require = arg0;
      const items = [GuildScheduledEventStore];
      let stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildScheduledEventStore.getGuildScheduledEvent(closure_0),
      );
      let tmp5 = null;
      if (nextRecurrenceIdInEvent == null) {
        nextRecurrenceIdInEvent = tmp2(9163).getNextRecurrenceIdInEvent(stateFromStores);
        const tmp2Result = tmp2(9163);
      }
      useEventExceptionDefault;
      if (stateFromStores != tmp5) {
        const id = stateFromStores.id;
      }
      if (tmp5 == stateFromStores) {
        return null;
      } else {
        if (tmp5 != stateFromStores.recurrence_rule) {
          if (tmp5 != nextRecurrenceIdInEvent) {
            const baseScheduleForRecurrence = tmp2(9163).getBaseScheduleForRecurrence(
              nextRecurrenceIdInEvent,
              stateFromStores,
            );
            const tmp2Result3 = tmp2(9163);
            const scheduleForRecurrenceWithException = tmp2(9163).getScheduleForRecurrenceWithException(
              baseScheduleForRecurrence,
              tmp7,
            );
            ({ startDate, endDate } = scheduleForRecurrenceWithException);
            let obj2 = { startTime: startDate.toDate(), endTime: null };
            let toDateResult;
            if (endDate != tmp5) {
              toDateResult = endDate.toDate();
            }
            obj2.endTime = toDateResult;
            const tmp2Result4 = tmp2(9163);
          }
        }
        const obj3 = { startTime: null, endTime: null };
        const _Date = Date;
        const date = new Date(stateFromStores.scheduled_start_time);
        obj3.startTime = date;
        tmp5 = null;
        if (tmp16) {
          const _Date2 = Date;
          stateFromStores = new Date(stateFromStores.scheduled_end_time);
          tmp5 = stateFromStores;
        }
        obj3.endTime = tmp5;
        obj2 = obj3;
        tmp16 = tmp5 != stateFromStores.scheduled_end_time;
      }
      const obj = require("initialize");
    };
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  useEventException;
  if (null != guildEvent.recurrence_rule) {
    if (null != recurrenceId) {
      const baseScheduleForRecurrence = ScheduleUtils.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      const tmpResult = ScheduleUtils;
      const scheduleForRecurrenceWithException = ScheduleUtils.getScheduleForRecurrenceWithException(
        baseScheduleForRecurrence,
        tmp4,
      );
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      let obj = { startTime: startDate.toDate(), endTime: null };
      let toDateResult;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
      obj.endTime = toDateResult;
      const tmpResult2 = ScheduleUtils;
    }
    return obj;
  }
  const obj2 = { startTime: new Date(guildEvent.scheduled_start_time), endTime: null };
  let date1 = null;
  if (null != guildEvent.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(guildEvent.scheduled_end_time);
  }
  obj2.endTime = date1;
  obj = obj2;
  const date = new Date(guildEvent.scheduled_start_time);
};

// discord_app/modules/guild_scheduled_events/useEventSchedule.tsx
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import useEventException from "useEventException.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

const require = globalThis.__r;
const useEventExceptionDefault = useEventException;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(recurrence_rule, nextRecurrenceIdInEvent) {
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
}
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  _require = guildEventId;
  let nextRecurrenceIdInEvent = recurrenceId;
  const items = [GuildScheduledEventStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildScheduledEventStore.getGuildScheduledEvent(closure_0),
  );
  let tmp5 = null;
  if (recurrenceId == null) {
    nextRecurrenceIdInEvent = tmp2(9816).getNextRecurrenceIdInEvent(stateFromStores);
    const tmp2Result = tmp2(9816);
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
        const baseScheduleForRecurrence = tmp2(9816).getBaseScheduleForRecurrence(
          nextRecurrenceIdInEvent,
          stateFromStores,
        );
        const tmp2Result3 = tmp2(9816);
        const scheduleForRecurrenceWithException = tmp2(9816).getScheduleForRecurrenceWithException(
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
        const tmp2Result4 = tmp2(9816);
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

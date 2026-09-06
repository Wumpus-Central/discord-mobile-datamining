// === Module 9668: useEventSchedule ===

// Module 9668 (useEventSchedule)
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import useEventException from "useEventException" /* 9669 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

const useEventExceptionDefault = useEventException;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(recurrence_rule, nextRecurrenceIdInEvent) {
  if (nextRecurrenceIdInEvent == null) {
    let obj = ScheduleUtils;
    nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(recurrence_rule);
  }
  if (null != recurrence_rule.recurrence_rule) {
    if (null != nextRecurrenceIdInEvent) {
      const baseScheduleForRecurrence = ScheduleUtils.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, recurrence_rule);
      const scheduleForRecurrenceWithException = ScheduleUtils.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp5);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj = { startTime: startDate.toDate(), endTime: null };
      let toDateResult;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
      obj.endTime = toDateResult;
    }
    return obj;
  }
  obj = { startTime: new Date(recurrence_rule.scheduled_start_time), endTime: null };
  let date1 = null;
  if (null != recurrence_rule.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(recurrence_rule.scheduled_end_time);
  }
  obj.endTime = date1;
  const date = new Date(recurrence_rule.scheduled_start_time);
};
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  _require = guildEventId;
  let nextRecurrenceIdInEvent = recurrenceId;
  let obj = require("initialize");
  const items = [GuildScheduledEventStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(closure_0));
  let tmp5 = null;
  if (recurrenceId == null) {
    let tmp2Result = tmp2(9665);
    nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(stateFromStores);
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
        tmp2Result = tmp2(9665);
        const baseScheduleForRecurrence = tmp2Result.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
        const scheduleForRecurrenceWithException = tmp2(9665).getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp7);
        ({ startDate, endDate } = scheduleForRecurrenceWithException);
        obj = { startTime: startDate.toDate(), endTime: null };
        let toDateResult;
        if (endDate != tmp5) {
          toDateResult = endDate.toDate();
        }
        obj.endTime = toDateResult;
        const tmp2Result1 = tmp2(9665);
      }
    }
    obj = { startTime: null, endTime: null };
    const _Date = Date;
    const date = new Date(stateFromStores.scheduled_start_time);
    obj.startTime = date;
    tmp5 = null;
    if (tmp16) {
      const _Date2 = Date;
      stateFromStores = new Date(stateFromStores.scheduled_end_time);
      tmp5 = stateFromStores;
    }
    obj.endTime = tmp5;
    tmp16 = tmp5 != stateFromStores.scheduled_end_time;
  }
};
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  useEventException;
  if (null != guildEvent.recurrence_rule) {
    if (null != recurrenceId) {
      let tmpResult = ScheduleUtils;
      const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      tmpResult = ScheduleUtils;
      const scheduleForRecurrenceWithException = tmpResult.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp4);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      let obj = { startTime: startDate.toDate(), endTime: null };
      let toDateResult;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
      obj.endTime = toDateResult;
    }
    return obj;
  }
  obj = { startTime: new Date(guildEvent.scheduled_start_time), endTime: null };
  let date1 = null;
  if (null != guildEvent.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(guildEvent.scheduled_end_time);
  }
  obj.endTime = date1;
  const date = new Date(guildEvent.scheduled_start_time);
};
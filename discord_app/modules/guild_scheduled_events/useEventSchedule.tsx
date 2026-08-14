// discord_app/modules/guild_scheduled_events/useEventSchedule.tsx
import scheduledEventSort from "scheduledEventSort";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useEventException } from "useEventException.tsx";
import { getRRule } from "utils/ScheduleUtils.tsx";

const require = arg1;
const result = require("useEventException").fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(recurrence_rule, nextRecurrenceIdInEvent) {
  let endDate;
  let startDate;
  if (nextRecurrenceIdInEvent == null) {
    let obj = getRRule;
    nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(recurrence_rule);
  }
  if (null != recurrence_rule.recurrence_rule) {
    if (null != nextRecurrenceIdInEvent) {
      const baseScheduleForRecurrence = getRRule.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, recurrence_rule);
      const obj2 = getRRule;
      const scheduleForRecurrenceWithException = getRRule.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp5);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj = { startTime: null, endTime: null };
      obj[0] = startDate.toDate();
      let toDateResult;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
      obj[1] = toDateResult;
      const obj3 = getRRule;
    }
    return obj;
  }
  obj = { startTime: null, endTime: null };
  obj[0] = new Date(recurrence_rule.scheduled_start_time);
  let date1 = null;
  if (null != recurrence_rule.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(recurrence_rule.scheduled_end_time);
  }
  obj[1] = date1;
};
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  let endDate;
  let startDate;
  const _require = guildEventId;
  let nextRecurrenceIdInEvent = recurrenceId;
  let obj = _initialize;
  const items = [scheduledEventSort];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuildScheduledEvent(closure_0));
  let tmp5 = null;
  if (recurrenceId == null) {
    let tmp2Result = tmp2(9005);
    nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(stateFromStores);
  }
  useEventException;
  if (stateFromStores != tmp5) {
    const id = stateFromStores.id;
  }
  if (tmp5 == stateFromStores) {
    return null;
  } else {
    if (tmp5 != stateFromStores.recurrence_rule) {
      if (tmp5 != nextRecurrenceIdInEvent) {
        tmp2Result = tmp2(9005);
        const baseScheduleForRecurrence = tmp2Result.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
        const scheduleForRecurrenceWithException = tmp2(9005).getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp7);
        ({ startDate, endDate } = scheduleForRecurrenceWithException);
        obj = { startTime: null, endTime: null };
        obj[0] = startDate.toDate();
        let toDateResult;
        if (endDate != tmp5) {
          toDateResult = endDate.toDate();
        }
        obj[1] = toDateResult;
        const tmp2Result1 = tmp2(9005);
      }
    }
    obj = { startTime: null, endTime: null };
    const _Date = Date;
    const date = new Date(stateFromStores.scheduled_start_time);
    obj[0] = date;
    tmp5 = null;
    if (tmp16) {
      const _Date2 = Date;
      stateFromStores = new Date(stateFromStores.scheduled_end_time);
      tmp5 = stateFromStores;
    }
    obj[1] = tmp5;
    tmp16 = tmp5 != stateFromStores.scheduled_end_time;
  }
};
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  let endDate;
  let startDate;
  useEventException;
  if (null != guildEvent.recurrence_rule) {
    if (null != recurrenceId) {
      let tmpResult = tmp(9005);
      const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      tmpResult = tmp(9005);
      const scheduleForRecurrenceWithException = tmpResult.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp4);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      let obj = { startTime: null, endTime: null };
      obj[0] = startDate.toDate();
      let toDateResult;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
      obj[1] = toDateResult;
    }
    return obj;
  }
  obj = { startTime: null, endTime: null };
  obj[0] = new Date(guildEvent.scheduled_start_time);
  let date1 = null;
  if (null != guildEvent.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(guildEvent.scheduled_end_time);
  }
  obj[1] = date1;
};
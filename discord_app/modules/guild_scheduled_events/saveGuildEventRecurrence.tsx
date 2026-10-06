// === Module 9212: saveGuildEventRecurrence ===

// Module 9212 (saveGuildEventRecurrence)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9213 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/saveGuildEventRecurrence.tsx");

export default function saveGuildEventRecurrence(guild_id, nextRecurrenceIdInEvent, startDate, event_exception_id) {
  let date;
  let toISOStringResult1;
  let toISOStringResult2;
  let toISOStringResult3;
  const obj = ScheduleUtils;
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guild_id);
  startDate = null;
  const obj2 = ScheduleUtils;
  if (!obj2.areDatesIdentical(baseScheduleForRecurrence.startDate, startDate.startDate)) {
    startDate = startDate.startDate;
  }
  let endDate = null;
  const tmpResult = ScheduleUtils;
  if (!tmpResult.areDatesIdentical(baseScheduleForRecurrence.endDate, startDate.endDate)) {
    endDate = startDate.endDate;
  }
  if (null != event_exception_id) {
    let result1;
    const tmpResult2 = ScheduleUtils;
    const result = tmpResult2.areSchedulesIdentical(startDate, baseScheduleForRecurrence);
    const obj5 = GuildScheduledEventsActionCreatorsDefault;
    if (result) {
      result1 = obj5.deleteGuildEventException(guild_id.guild_id, guild_id.id, event_exception_id.event_exception_id);
    } else {
      let toISOStringResult;
      const updateGuildEventException = obj5.updateGuildEventException;
      if (startDate != null) {
        toISOStringResult = startDate.toISOString();
      }
      if (toISOStringResult == null) {
        toISOStringResult = null;
      }
      const obj3 = { scheduled_start_time: toISOStringResult, scheduled_end_time: toISOStringResult1, is_canceled: event_exception_id.is_canceled };
      toISOStringResult1 = undefined;
      if (endDate != null) {
        toISOStringResult1 = endDate.toISOString();
      }
      if (toISOStringResult1 == null) {
        toISOStringResult1 = null;
      }
      result1 = updateGuildEventException(obj3, guild_id.guild_id, guild_id.id, nextRecurrenceIdInEvent);
    }
    return result1;
  } else {
    const obj7 = SnowflakeUtilsDefault;
    const extractTimestampResult = obj7.extractTimestamp(nextRecurrenceIdInEvent);
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj4 = { original_scheduled_start_time: date.toISOString(), scheduled_start_time: toISOStringResult2, scheduled_end_time: toISOStringResult3, is_canceled: false };
    const createGuildEventException = GuildScheduledEventsActionCreatorsDefault.createGuildEventException;
    GuildScheduledEventsActionCreatorsDefault;
    toISOStringResult2 = undefined;
    date = new Date(extractTimestampResult);
    if (startDate != null) {
      toISOStringResult2 = startDate.toISOString();
    }
    toISOStringResult3 = undefined;
    if (endDate != null) {
      toISOStringResult3 = endDate.toISOString();
    }
    return createGuildEventException(obj4, guild_id.guild_id, guild_id.id);
  }
};
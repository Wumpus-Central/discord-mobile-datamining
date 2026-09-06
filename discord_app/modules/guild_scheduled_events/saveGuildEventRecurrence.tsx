// === Module 9702: saveGuildEventRecurrence ===

// Module 9702 (saveGuildEventRecurrence)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9703 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/saveGuildEventRecurrence.tsx");

export default function saveGuildEventRecurrence(guild_id, nextRecurrenceIdInEvent, startDate, event_exception_id) {
  let obj = ScheduleUtils;
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guild_id);
  startDate = null;
  if (!obj2.areDatesIdentical(baseScheduleForRecurrence.startDate, startDate.startDate)) {
    startDate = startDate.startDate;
  }
  let tmpResult = ScheduleUtils;
  let endDate = null;
  if (!tmpResult.areDatesIdentical(baseScheduleForRecurrence.endDate, startDate.endDate)) {
    endDate = startDate.endDate;
  }
  if (null != event_exception_id) {
    tmpResult = ScheduleUtils;
    const result = tmpResult.areSchedulesIdentical(startDate, baseScheduleForRecurrence);
    const obj5 = GuildScheduledEventsActionCreatorsDefault;
    if (result) {
      let result1 = obj5.deleteGuildEventException(guild_id.guild_id, guild_id.id, event_exception_id.event_exception_id);
    } else {
      let toISOStringResult;
      if (startDate != null) {
        toISOStringResult = startDate.toISOString();
      }
      obj = { scheduled_start_time: toISOStringResult, scheduled_end_time: null, is_canceled: null };
      let toISOStringResult1;
      if (endDate != null) {
        toISOStringResult1 = endDate.toISOString();
      }
      obj.scheduled_end_time = toISOStringResult1;
      obj.is_canceled = event_exception_id.is_canceled;
      result1 = obj5.updateGuildEventException(obj, guild_id.guild_id, guild_id.id, nextRecurrenceIdInEvent);
    }
    return result1;
  } else {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(nextRecurrenceIdInEvent);
    obj = { original_scheduled_start_time: null, scheduled_start_time: null, scheduled_end_time: null, is_canceled: false };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj.original_scheduled_start_time = date.toISOString();
    let toISOStringResult2;
    if (startDate != null) {
      toISOStringResult2 = startDate.toISOString();
    }
    obj.scheduled_start_time = toISOStringResult2;
    let toISOStringResult3;
    if (endDate != null) {
      toISOStringResult3 = endDate.toISOString();
    }
    obj.scheduled_end_time = toISOStringResult3;
    return GuildScheduledEventsActionCreatorsDefault.createGuildEventException(obj, guild_id.guild_id, guild_id.id);
  }
  obj2 = ScheduleUtils;
};
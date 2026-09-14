// discord_app/modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/guild_scheduled_events/saveGuildEventRecurrence.tsx");

export default function saveGuildEventRecurrence(guild_id, nextRecurrenceIdInEvent, startDate, event_exception_id) {
  const baseScheduleForRecurrence = ScheduleUtils.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guild_id);
  startDate = null;
  if (!obj2.areDatesIdentical(baseScheduleForRecurrence.startDate, startDate.startDate)) {
    startDate = startDate.startDate;
  }
  obj2 = ScheduleUtils;
  let endDate = null;
  if (!tmpResult.areDatesIdentical(baseScheduleForRecurrence.endDate, startDate.endDate)) {
    endDate = startDate.endDate;
  }
  if (null != event_exception_id) {
    const result = ScheduleUtils.areSchedulesIdentical(startDate, baseScheduleForRecurrence);
    const obj5 = GuildScheduledEventsActionCreatorsDefault;
    if (result) {
      let result1 = obj5.deleteGuildEventException(
        guild_id.guild_id,
        guild_id.id,
        event_exception_id.event_exception_id,
      );
    } else {
      let toISOStringResult;
      if (startDate != null) {
        toISOStringResult = startDate.toISOString();
      }
      const obj3 = { scheduled_start_time: toISOStringResult, scheduled_end_time: null, is_canceled: null };
      let toISOStringResult1;
      if (endDate != null) {
        toISOStringResult1 = endDate.toISOString();
      }
      obj3.scheduled_end_time = toISOStringResult1;
      obj3.is_canceled = event_exception_id.is_canceled;
      result1 = obj5.updateGuildEventException(obj3, guild_id.guild_id, guild_id.id, nextRecurrenceIdInEvent);
    }
    return result1;
  } else {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(nextRecurrenceIdInEvent);
    const obj4 = {
      original_scheduled_start_time: null,
      scheduled_start_time: null,
      scheduled_end_time: null,
      is_canceled: false,
    };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4.original_scheduled_start_time = date.toISOString();
    let toISOStringResult2;
    if (startDate != null) {
      toISOStringResult2 = startDate.toISOString();
    }
    obj4.scheduled_start_time = toISOStringResult2;
    let toISOStringResult3;
    if (endDate != null) {
      toISOStringResult3 = endDate.toISOString();
    }
    obj4.scheduled_end_time = toISOStringResult3;
    return GuildScheduledEventsActionCreatorsDefault.createGuildEventException(obj4, guild_id.guild_id, guild_id.id);
  }
  tmpResult = ScheduleUtils;
}

// discord_app/modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
import set from "../../../_runtime/00002_set.js";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import getRRule from "utils/ScheduleUtils.tsx";
import _modDef9673 from "GuildScheduledEventsActionCreators.tsx";

let result = set.fileFinishedImporting("modules/guild_scheduled_events/saveGuildEventRecurrence.tsx");

export default function saveGuildEventRecurrence(guild_id, nextRecurrenceIdInEvent, startDate, event_exception_id) {
  let obj = getRRule;
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, guild_id);
  startDate = null;
  if (!obj2.areDatesIdentical(baseScheduleForRecurrence.startDate, startDate.startDate)) {
    startDate = startDate.startDate;
  }
  let tmpResult = tmp(9634);
  let endDate = null;
  if (!tmpResult.areDatesIdentical(baseScheduleForRecurrence.endDate, startDate.endDate)) {
    endDate = startDate.endDate;
  }
  if (null != event_exception_id) {
    tmpResult = tmp(9634);
    const result = tmpResult.areSchedulesIdentical(startDate, baseScheduleForRecurrence);
    const obj5 = _modDef9673;
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
      obj = { scheduled_start_time: null, scheduled_end_time: null, is_canceled: null };
      obj[0] = toISOStringResult;
      let toISOStringResult1;
      if (endDate != null) {
        toISOStringResult1 = endDate.toISOString();
      }
      obj[1] = toISOStringResult1;
      obj[2] = event_exception_id.is_canceled;
      result1 = obj5.updateGuildEventException(obj, guild_id.guild_id, guild_id.id, nextRecurrenceIdInEvent);
    }
    return result1;
  } else {
    const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(nextRecurrenceIdInEvent);
    const obj7 = DISCORD_EPOCHDefault;
    obj = {
      original_scheduled_start_time: null,
      scheduled_start_time: null,
      scheduled_end_time: null,
      is_canceled: false,
    };
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj[0] = date.toISOString();
    let toISOStringResult2;
    if (startDate != null) {
      toISOStringResult2 = startDate.toISOString();
    }
    obj[1] = toISOStringResult2;
    let toISOStringResult3;
    if (endDate != null) {
      toISOStringResult3 = endDate.toISOString();
    }
    obj[2] = toISOStringResult3;
    return _modDef9673.createGuildEventException(obj, guild_id.guild_id, guild_id.id);
  }
  obj2 = getRRule;
}

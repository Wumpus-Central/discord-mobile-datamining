// discord_app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
import fetchFingerprint from "fetchFingerprint";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { getChannelFromEvent } from "EntityUtils.tsx";
import { getRRule } from "ScheduleUtils.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ GuildScheduledEventEntityTypes: c3, GuildScheduledEventStatus: c4, GuildScheduledEventPrivacyLevel: c5, FAKE_EVENT_ID: closure_6 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("getRRule").fileFinishedImporting("modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx");

export const EditGuildEventScreens = { CHANNEL_SELECTOR: "ChannelSelector", DETAILS: "Details", PREVIEW: "Preview" };
export const isEditingEvent = function isEditingEvent(initialGuildEvent) {
  let id;
  if (initialGuildEvent != null) {
    id = initialGuildEvent.id;
  }
  return Boolean(id);
};
export const recurrenceRuleToServer = function recurrenceRuleToServer(recurrenceRule) {
  let byMonthDay;
  let tmp = null;
  if (null != recurrenceRule) {
    const obj = { start: null, end: null, frequency: null, interval: null, by_weekday: null, by_n_weekday: null, by_month: null, by_month_day: null, by_year_day: null, count: null };
    ({ start: obj[0], end: obj[1], frequency: obj[2], interval: obj[3], byWeekday: obj[4], byNWeekday: obj[5], byMonth: obj[6], byMonthDay } = recurrenceRule);
    let num;
    if (byMonthDay != null) {
      num = byMonthDay.length;
    }
    if (num == null) {
      num = 0;
    }
    byMonthDay = null;
    if (num > 0) {
      byMonthDay = recurrenceRule.byMonthDay;
    }
    obj[7] = byMonthDay;
    ({ byYearDay: obj[8], count: obj[9] } = recurrenceRule);
    tmp = obj;
  }
  return tmp;
};
export const recurrenceRuleFromServer = function recurrenceRuleFromServer(recurrence_rule) {
  let tmp = null;
  if (null != recurrence_rule) {
    const obj = { start: null, end: null, frequency: null, interval: null, byWeekday: null, byNWeekday: null, byMonth: null, byMonthDay: null, byYearDay: null, count: null };
    const _Date = Date;
    const date = new Date(recurrence_rule.start);
    obj[0] = date.toISOString();
    let toISOStringResult = null;
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
    obj[1] = toISOStringResult;
    ({ frequency: obj[2], interval: obj[3], by_weekday: obj[4], by_n_weekday: obj[5], by_month: obj[6], by_month_day: obj[7], by_year_day: obj[8], count: obj[9] } = recurrence_rule);
    tmp = obj;
  }
  return tmp;
};
export const isExistingGuildEvent = function isExistingGuildEvent(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "id" in arg0;
  }
  return tmp;
};
export const convertToFakeGuildEvent = function convertToFakeGuildEvent(guildEvent, id) {
  let byMonthDay;
  let channelId;
  let description;
  let entityMetadata;
  let entityType;
  let eventExceptions;
  let image;
  let name;
  let privacyLevel;
  let recurrenceRule;
  let scheduledEndTime;
  let scheduledStartTime;
  let tmp = arg2;
  ({ description, entityMetadata, image, recurrenceRule, eventExceptions } = guildEvent);
  ({ name, privacyLevel, channelId, scheduledStartTime, scheduledEndTime, entityType } = guildEvent);
  if (arg2 == null) {
    tmp = closure_6;
  }
  let obj = { id: tmp, name, description: null, privacy_level: null, scheduled_start_time: null, scheduled_end_time: null, entity_type: null, entity_metadata: null, image: null, channel_id: null, guild_id: null, creator_id: null, status: null, recurrence_rule: null, guild_scheduled_event_exceptions: null };
  if (description == null) {
    description = null;
  }
  obj[2] = description;
  obj[3] = privacyLevel;
  obj[4] = scheduledStartTime;
  obj[5] = scheduledEndTime;
  obj[6] = entityType;
  if (entityMetadata == null) {
    entityMetadata = null;
  }
  obj[7] = entityMetadata;
  obj[8] = image;
  obj[9] = channelId;
  obj[10] = id;
  obj[11] = id.getId();
  obj[12] = constants2.SCHEDULED;
  let tmp2 = null;
  if (null != recurrenceRule) {
    obj = { start: null, end: null, frequency: null, interval: null, by_weekday: null, by_n_weekday: null, by_month: null, by_month_day: null, by_year_day: null, count: null };
    ({ start: obj2[0], end: obj2[1], frequency: obj2[2], interval: obj2[3], byWeekday: obj2[4], byNWeekday: obj2[5], byMonth: obj2[6], byMonthDay } = recurrenceRule);
    let num;
    if (byMonthDay != null) {
      num = byMonthDay.length;
    }
    if (num == null) {
      num = 0;
    }
    byMonthDay = null;
    if (num > 0) {
      byMonthDay = recurrenceRule.byMonthDay;
    }
    obj[7] = byMonthDay;
    ({ byYearDay: obj2[8], count: obj2[9] } = recurrenceRule);
    tmp2 = obj;
  }
  obj[13] = tmp2;
  obj[14] = eventExceptions.map((eventExceptionId) => ({ event_exception_id: eventExceptionId.eventExceptionId, event_id: eventExceptionId.eventId, guild_id: eventExceptionId.guildId, scheduled_start_time: eventExceptionId.scheduledStartTime, scheduled_end_time: eventExceptionId.scheduledEndTime, is_canceled: eventExceptionId.isCanceled }));
  return obj;
};
export const getInitialGuildEventData = function getInitialGuildEventData(initialGuildEvent, targetChannel) {
  let str;
  if (initialGuildEvent != null) {
    str = initialGuildEvent.name;
  }
  if (str == null) {
    str = "";
  }
  let obj = { name: str, privacyLevel: null, description: null, scheduledStartTime: null, entityType: null, entityMetadata: null, channelId: null, creatorId: null, image: null, scheduledEndTime: null, recurrenceRule: null, eventExceptions: null };
  let privacy_level;
  if (initialGuildEvent != null) {
    privacy_level = initialGuildEvent.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = constants3.GUILD_ONLY;
  }
  obj[1] = privacy_level;
  let str2;
  if (initialGuildEvent != null) {
    str2 = initialGuildEvent.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj[2] = str2;
  let scheduled_start_time;
  if (initialGuildEvent != null) {
    scheduled_start_time = initialGuildEvent.scheduled_start_time;
  }
  if (scheduled_start_time == null) {
    const initialEventStartDate = getRRule.getInitialEventStartDate();
    scheduled_start_time = initialEventStartDate.toISOString();
    const obj2 = getRRule;
  }
  obj[3] = scheduled_start_time;
  let entity_type;
  if (initialGuildEvent != null) {
    entity_type = initialGuildEvent.entity_type;
  }
  if (entity_type == null) {
    entity_type = constants.NONE;
  }
  obj[4] = entity_type;
  let entity_metadata;
  if (initialGuildEvent != null) {
    entity_metadata = initialGuildEvent.entity_metadata;
  }
  obj[5] = entity_metadata;
  let channel_id;
  if (initialGuildEvent != null) {
    channel_id = initialGuildEvent.channel_id;
  }
  obj[6] = channel_id;
  let creator_id;
  if (initialGuildEvent != null) {
    creator_id = initialGuildEvent.creator_id;
  }
  obj[7] = creator_id;
  let image;
  if (initialGuildEvent != null) {
    image = initialGuildEvent.image;
  }
  obj[8] = image;
  let scheduled_end_time;
  if (initialGuildEvent != null) {
    scheduled_end_time = initialGuildEvent.scheduled_end_time;
  }
  obj[9] = scheduled_end_time;
  let recurrence_rule;
  if (initialGuildEvent != null) {
    recurrence_rule = initialGuildEvent.recurrence_rule;
  }
  let tmp14 = null;
  if (null != recurrence_rule) {
    obj = { start: null, end: null, frequency: null, interval: null, byWeekday: null, byNWeekday: null, byMonth: null, byMonthDay: null, byYearDay: null, count: null };
    const _Date = Date;
    const date = new Date(recurrence_rule.start);
    obj[0] = date.toISOString();
    let toISOStringResult = null;
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
    obj[1] = toISOStringResult;
    ({ frequency: obj4[2], interval: obj4[3], by_weekday: obj4[4], by_n_weekday: obj4[5], by_month: obj4[6], by_month_day: obj4[7], by_year_day: obj4[8], count: obj4[9] } = recurrence_rule);
    tmp14 = obj;
  }
  obj[10] = tmp14;
  let prop;
  if (initialGuildEvent != null) {
    prop = initialGuildEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  obj[11] = prop.map((eventExceptionId) => ({ eventExceptionId: eventExceptionId.event_exception_id, eventId: eventExceptionId.event_id, guildId: eventExceptionId.guild_id, scheduledStartTime: eventExceptionId.scheduled_start_time, scheduledEndTime: eventExceptionId.scheduled_end_time, isCanceled: eventExceptionId.is_canceled }));
  let tmp23 = null != initialGuildEvent;
  if (tmp23) {
    tmp23 = "id" in initialGuildEvent;
  }
  if (tmp23) {
    let entity_type1;
    if (initialGuildEvent != null) {
      entity_type1 = initialGuildEvent.entity_type;
    }
    if (entity_type1 === constants.EXTERNAL) {
      const locationFromEvent = getChannelFromEvent.getLocationFromEvent(initialGuildEvent);
      if (null != locationFromEvent) {
        obj = { location: null };
        obj[0] = locationFromEvent;
        obj.entityMetadata = obj;
      }
      const obj7 = getChannelFromEvent;
    }
    return obj;
  }
  if (tmp26) {
    obj.channelId = targetChannel.id;
    if (targetChannel.isGuildStageVoice()) {
      obj.entityType = constants.STAGE_INSTANCE;
    } else if (targetChannel.isGuildVoice()) {
      obj.entityType = constants.VOICE;
    }
  }
};
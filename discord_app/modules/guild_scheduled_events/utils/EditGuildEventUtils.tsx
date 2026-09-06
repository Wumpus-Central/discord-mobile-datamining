// discord_app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
import ScheduleUtils from "ScheduleUtils.tsx";
import EntityUtils from "EntityUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const GuildScheduledEventsConstants = fn(1963);
({
  GuildScheduledEventEntityTypes: c3,
  GuildScheduledEventStatus: closure_4,
  GuildScheduledEventPrivacyLevel: hasOwnProperty,
  FAKE_EVENT_ID: metroRequire,
} = GuildScheduledEventsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx");

export const EditGuildEventScreens = { CHANNEL_SELECTOR: "ChannelSelector", DETAILS: "Details", PREVIEW: "Preview" };
export const isEditingEvent = function isEditingEvent(initialGuildEvent) {
  let id;
  if (initialGuildEvent != null) {
    id = initialGuildEvent.id;
  }
  return Boolean(id);
};
export const recurrenceRuleToServer = function recurrenceRuleToServer(recurrenceRule) {
  let tmp = null;
  if (null != recurrenceRule) {
    const obj = {
      start: null,
      end: null,
      frequency: null,
      interval: null,
      by_weekday: null,
      by_n_weekday: null,
      by_month: null,
      by_month_day: null,
      by_year_day: null,
      count: null,
    };
    ({
      start: obj.start,
      end: obj.end,
      frequency: obj.frequency,
      interval: obj.interval,
      byWeekday: obj.by_weekday,
      byNWeekday: obj.by_n_weekday,
      byMonth: obj.by_month,
      byMonthDay,
    } = recurrenceRule);
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
    obj.by_month_day = byMonthDay;
    ({ byYearDay: obj.by_year_day, count: obj.count } = recurrenceRule);
    tmp = obj;
  }
  return tmp;
};
export const recurrenceRuleFromServer = function recurrenceRuleFromServer(recurrence_rule) {
  let tmp = null;
  if (null != recurrence_rule) {
    const obj = {
      start: null,
      end: null,
      frequency: null,
      interval: null,
      byWeekday: null,
      byNWeekday: null,
      byMonth: null,
      byMonthDay: null,
      byYearDay: null,
      count: null,
    };
    const _Date = Date;
    const date = new Date(recurrence_rule.start);
    obj.start = date.toISOString();
    let toISOStringResult = null;
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
    obj.end = toISOStringResult;
    ({
      frequency: obj.frequency,
      interval: obj.interval,
      by_weekday: obj.byWeekday,
      by_n_weekday: obj.byNWeekday,
      by_month: obj.byMonth,
      by_month_day: obj.byMonthDay,
      by_year_day: obj.byYearDay,
      count: obj.count,
    } = recurrence_rule);
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
export const convertToFakeGuildEvent = function convertToFakeGuildEvent(guildEvent, id, arg2) {
  let tmp = arg2;
  ({ description, entityMetadata, image, recurrenceRule, eventExceptions } = guildEvent);
  ({ name, privacyLevel, channelId, scheduledStartTime, scheduledEndTime, entityType } = guildEvent);
  if (arg2 == null) {
    tmp = timestampProducer;
  }
  let obj = {
    id: tmp,
    name,
    description: null,
    privacy_level: null,
    scheduled_start_time: null,
    scheduled_end_time: null,
    entity_type: null,
    entity_metadata: null,
    image: null,
    channel_id: null,
    guild_id: null,
    creator_id: null,
    status: null,
    recurrence_rule: null,
    guild_scheduled_event_exceptions: null,
  };
  if (description == null) {
    description = null;
  }
  obj.description = description;
  obj.privacy_level = privacyLevel;
  obj.scheduled_start_time = scheduledStartTime;
  obj.scheduled_end_time = scheduledEndTime;
  obj.entity_type = entityType;
  if (entityMetadata == null) {
    entityMetadata = null;
  }
  obj.entity_metadata = entityMetadata;
  obj.image = image;
  obj.channel_id = channelId;
  obj.guild_id = id;
  obj.creator_id = AuthenticationStore.getId();
  obj.status = constants2.SCHEDULED;
  let tmp2 = null;
  if (null != recurrenceRule) {
    obj = {
      start: null,
      end: null,
      frequency: null,
      interval: null,
      by_weekday: null,
      by_n_weekday: null,
      by_month: null,
      by_month_day: null,
      by_year_day: null,
      count: null,
    };
    ({
      start: obj2.start,
      end: obj2.end,
      frequency: obj2.frequency,
      interval: obj2.interval,
      byWeekday: obj2.by_weekday,
      byNWeekday: obj2.by_n_weekday,
      byMonth: obj2.by_month,
      byMonthDay,
    } = recurrenceRule);
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
    obj.by_month_day = byMonthDay;
    ({ byYearDay: obj2.by_year_day, count: obj2.count } = recurrenceRule);
    tmp2 = obj;
  }
  obj.recurrence_rule = tmp2;
  obj.guild_scheduled_event_exceptions = eventExceptions.map((eventExceptionId) => ({
    event_exception_id: eventExceptionId.eventExceptionId,
    event_id: eventExceptionId.eventId,
    guild_id: eventExceptionId.guildId,
    scheduled_start_time: eventExceptionId.scheduledStartTime,
    scheduled_end_time: eventExceptionId.scheduledEndTime,
    is_canceled: eventExceptionId.isCanceled,
  }));
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
  let obj = {
    name: str,
    privacyLevel: null,
    description: null,
    scheduledStartTime: null,
    entityType: null,
    entityMetadata: null,
    channelId: null,
    creatorId: null,
    image: null,
    scheduledEndTime: null,
    recurrenceRule: null,
    eventExceptions: null,
  };
  let privacy_level;
  if (initialGuildEvent != null) {
    privacy_level = initialGuildEvent.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = constants3.GUILD_ONLY;
  }
  obj.privacyLevel = privacy_level;
  let str2;
  if (initialGuildEvent != null) {
    str2 = initialGuildEvent.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj.description = str2;
  let scheduled_start_time;
  if (initialGuildEvent != null) {
    scheduled_start_time = initialGuildEvent.scheduled_start_time;
  }
  if (scheduled_start_time == null) {
    const initialEventStartDate = ScheduleUtils.getInitialEventStartDate();
    scheduled_start_time = initialEventStartDate.toISOString();
  }
  obj.scheduledStartTime = scheduled_start_time;
  let entity_type;
  if (initialGuildEvent != null) {
    entity_type = initialGuildEvent.entity_type;
  }
  if (entity_type == null) {
    entity_type = constants.NONE;
  }
  obj.entityType = entity_type;
  let entity_metadata;
  if (initialGuildEvent != null) {
    entity_metadata = initialGuildEvent.entity_metadata;
  }
  obj.entityMetadata = entity_metadata;
  let channel_id;
  if (initialGuildEvent != null) {
    channel_id = initialGuildEvent.channel_id;
  }
  obj.channelId = channel_id;
  let creator_id;
  if (initialGuildEvent != null) {
    creator_id = initialGuildEvent.creator_id;
  }
  obj.creatorId = creator_id;
  let image;
  if (initialGuildEvent != null) {
    image = initialGuildEvent.image;
  }
  obj.image = image;
  let scheduled_end_time;
  if (initialGuildEvent != null) {
    scheduled_end_time = initialGuildEvent.scheduled_end_time;
  }
  obj.scheduledEndTime = scheduled_end_time;
  let recurrence_rule;
  if (initialGuildEvent != null) {
    recurrence_rule = initialGuildEvent.recurrence_rule;
  }
  let tmp14 = null;
  if (null != recurrence_rule) {
    obj = {
      start: null,
      end: null,
      frequency: null,
      interval: null,
      byWeekday: null,
      byNWeekday: null,
      byMonth: null,
      byMonthDay: null,
      byYearDay: null,
      count: null,
    };
    const _Date = Date;
    const date = new Date(recurrence_rule.start);
    obj.start = date.toISOString();
    let toISOStringResult = null;
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
    obj.end = toISOStringResult;
    ({
      frequency: obj4.frequency,
      interval: obj4.interval,
      by_weekday: obj4.byWeekday,
      by_n_weekday: obj4.byNWeekday,
      by_month: obj4.byMonth,
      by_month_day: obj4.byMonthDay,
      by_year_day: obj4.byYearDay,
      count: obj4.count,
    } = recurrence_rule);
    tmp14 = obj;
  }
  obj.recurrenceRule = tmp14;
  let prop;
  if (initialGuildEvent != null) {
    prop = initialGuildEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  obj.eventExceptions = prop.map((eventExceptionId) => ({
    eventExceptionId: eventExceptionId.event_exception_id,
    eventId: eventExceptionId.event_id,
    guildId: eventExceptionId.guild_id,
    scheduledStartTime: eventExceptionId.scheduled_start_time,
    scheduledEndTime: eventExceptionId.scheduled_end_time,
    isCanceled: eventExceptionId.is_canceled,
  }));
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
      const locationFromEvent = EntityUtils.getLocationFromEvent(initialGuildEvent);
      if (null != locationFromEvent) {
        obj = { location: locationFromEvent };
        obj.entityMetadata = obj;
      }
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
  tmp26 = null == obj.channelId && null != targetChannel;
};

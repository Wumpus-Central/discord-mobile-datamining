// discord_app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
import ScheduleUtils from "ScheduleUtils.tsx";
import EntityUtils from "EntityUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildScheduledEventsConstants from "../GuildScheduledEventsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({
  GuildScheduledEventEntityTypes: c3,
  GuildScheduledEventStatus: closure_4,
  GuildScheduledEventPrivacyLevel: hasOwnProperty,
  FAKE_EVENT_ID: metroRequire,
} = GuildScheduledEventsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx");

export const EditGuildEventScreens = { CHANNEL_SELECTOR: "ChannelSelector", DETAILS: "Details", PREVIEW: "Preview" };
export const isEditingEvent = function isEditingEvent(initialGuildEvent) {
  let id;
  const _Boolean = Boolean;
  if (initialGuildEvent != null) {
    id = initialGuildEvent.id;
  }
  return _Boolean(id);
};
export const recurrenceRuleToServer = function recurrenceRuleToServer(recurrenceRule) {
  let byMonthDay;
  let byMonthDay1;
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
      by_month_day: byMonthDay1,
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
    byMonthDay1 = null;
    if (num > 0) {
      byMonthDay1 = recurrenceRule.byMonthDay;
    }
    ({ byYearDay: obj.by_year_day, count: obj.count } = recurrenceRule);
    tmp = obj;
  }
  return tmp;
};
export const recurrenceRuleFromServer = function recurrenceRuleFromServer(recurrence_rule) {
  let date;
  let toISOStringResult;
  let tmp = null;
  if (null != recurrence_rule) {
    const obj = {
      start: date.toISOString(),
      end: toISOStringResult,
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
    const self = this;
    const self2 = this;
    toISOStringResult = null;
    date = new Date(recurrence_rule.start);
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
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
  return null != arg0 && "id" in arg0;
};
export const convertToFakeGuildEvent = function convertToFakeGuildEvent(guildEvent, id, arg2) {
  let byMonthDay;
  let byMonthDay1;
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
  let tmp2;
  let tmp = arg2;
  ({ description, entityMetadata, image, recurrenceRule, eventExceptions } = guildEvent);
  ({ name, privacyLevel, channelId, scheduledStartTime, scheduledEndTime, entityType } = guildEvent);
  if (arg2 == null) {
    tmp = metroRequire;
  }
  const obj = {
    id: tmp,
    name,
    description,
    privacy_level: privacyLevel,
    scheduled_start_time: scheduledStartTime,
    scheduled_end_time: scheduledEndTime,
    entity_type: entityType,
    entity_metadata: entityMetadata,
    image,
    channel_id: channelId,
    guild_id: id,
    creator_id: AuthenticationStore.getId(),
    status: constants2.SCHEDULED,
    recurrence_rule: tmp2,
    guild_scheduled_event_exceptions: eventExceptions.map((eventExceptionId) => ({
      event_exception_id: eventExceptionId.eventExceptionId,
      event_id: eventExceptionId.eventId,
      guild_id: eventExceptionId.guildId,
      scheduled_start_time: eventExceptionId.scheduledStartTime,
      scheduled_end_time: eventExceptionId.scheduledEndTime,
      is_canceled: eventExceptionId.isCanceled,
    })),
  };
  if (description == null) {
    description = null;
  }
  if (entityMetadata == null) {
    entityMetadata = null;
  }
  tmp2 = null;
  if (null != recurrenceRule) {
    const obj3 = {
      start: null,
      end: null,
      frequency: null,
      interval: null,
      by_weekday: null,
      by_n_weekday: null,
      by_month: null,
      by_month_day: byMonthDay1,
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
    byMonthDay1 = null;
    if (num > 0) {
      byMonthDay1 = recurrenceRule.byMonthDay;
    }
    ({ byYearDay: obj2.by_year_day, count: obj2.count } = recurrenceRule);
    tmp2 = obj3;
  }
  return obj;
};
export const getInitialGuildEventData = function getInitialGuildEventData(initialGuildEvent, targetChannel) {
  let channel_id;
  let creator_id;
  let date;
  let entity_metadata;
  let entity_type;
  let image;
  let privacy_level;
  let prop;
  let scheduled_end_time;
  let scheduled_start_time;
  let str2;
  let tmp14;
  let toISOStringResult;
  let str;
  if (initialGuildEvent != null) {
    str = initialGuildEvent.name;
  }
  if (str == null) {
    str = "";
  }
  const obj = {
    name: str,
    privacyLevel: privacy_level,
    description: str2,
    scheduledStartTime: scheduled_start_time,
    entityType: entity_type,
    entityMetadata: entity_metadata,
    channelId: channel_id,
    creatorId: creator_id,
    image,
    scheduledEndTime: scheduled_end_time,
    recurrenceRule: tmp14,
    eventExceptions: prop.map((eventExceptionId) => ({
      eventExceptionId: eventExceptionId.event_exception_id,
      eventId: eventExceptionId.event_id,
      guildId: eventExceptionId.guild_id,
      scheduledStartTime: eventExceptionId.scheduled_start_time,
      scheduledEndTime: eventExceptionId.scheduled_end_time,
      isCanceled: eventExceptionId.is_canceled,
    })),
  };
  privacy_level = undefined;
  if (initialGuildEvent != null) {
    privacy_level = initialGuildEvent.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = hasOwnProperty.GUILD_ONLY;
  }
  str2 = undefined;
  if (initialGuildEvent != null) {
    str2 = initialGuildEvent.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  scheduled_start_time = undefined;
  if (initialGuildEvent != null) {
    scheduled_start_time = initialGuildEvent.scheduled_start_time;
  }
  if (scheduled_start_time == null) {
    const obj2 = ScheduleUtils;
    const initialEventStartDate = obj2.getInitialEventStartDate();
    scheduled_start_time = initialEventStartDate.toISOString();
  }
  entity_type = undefined;
  if (initialGuildEvent != null) {
    entity_type = initialGuildEvent.entity_type;
  }
  if (entity_type == null) {
    entity_type = constants.NONE;
  }
  entity_metadata = undefined;
  if (initialGuildEvent != null) {
    entity_metadata = initialGuildEvent.entity_metadata;
  }
  channel_id = undefined;
  if (initialGuildEvent != null) {
    channel_id = initialGuildEvent.channel_id;
  }
  creator_id = undefined;
  if (initialGuildEvent != null) {
    creator_id = initialGuildEvent.creator_id;
  }
  image = undefined;
  if (initialGuildEvent != null) {
    image = initialGuildEvent.image;
  }
  scheduled_end_time = undefined;
  if (initialGuildEvent != null) {
    scheduled_end_time = initialGuildEvent.scheduled_end_time;
  }
  let recurrence_rule;
  if (initialGuildEvent != null) {
    recurrence_rule = initialGuildEvent.recurrence_rule;
  }
  tmp14 = null;
  if (null != recurrence_rule) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = {
      start: date.toISOString(),
      end: toISOStringResult,
      frequency: null,
      interval: null,
      byWeekday: null,
      byNWeekday: null,
      byMonth: null,
      byMonthDay: null,
      byYearDay: null,
      count: null,
    };
    toISOStringResult = null;
    date = new Date(recurrence_rule.start);
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
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
    tmp14 = obj3;
  }
  prop = undefined;
  if (initialGuildEvent != null) {
    prop = initialGuildEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  const tmp19 = null != initialGuildEvent && "id" in initialGuildEvent;
  if (tmp19) {
    let entity_type1;
    if (initialGuildEvent != null) {
      entity_type1 = initialGuildEvent.entity_type;
    }
    if (entity_type1 === constants.EXTERNAL) {
      const obj7 = EntityUtils;
      const locationFromEvent = obj7.getLocationFromEvent(initialGuildEvent);
      if (null != locationFromEvent) {
        const obj5 = { location: locationFromEvent };
        obj.entityMetadata = obj5;
      }
    }
    return obj;
  }
  const tmp22 = null == obj.channelId && null != targetChannel;
  if (tmp22) {
    obj.channelId = targetChannel.id;
    if (targetChannel.isGuildStageVoice()) {
      obj.entityType = constants.STAGE_INSTANCE;
    } else if (targetChannel.isGuildVoice()) {
      obj.entityType = constants.VOICE;
    }
  }
};

// === Module 16005: initialize ===

// Module 16005 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;

const GuildScheduledEventStatus = GUILD_EVENT_MAX_NAME_LENGTH.GuildScheduledEventStatus;
let closure_1 = { hiddenEventsAndStages: [] };
const PersistedStore = initializeDefault.PersistedStore;
class LiveChannelNoticesStore extends PersistedStore {
}
const prototype = LiveChannelNoticesStore.prototype;
prototype["initialize"] = function initialize(hiddenEventsAndStages) {
  if (tmp) {
    closure_1 = hiddenEventsAndStages;
  }
};
prototype["isLiveChannelNoticeHidden"] = function isLiveChannelNoticeHidden(arg0) {
  ({ eventId, stageId } = arg0);
  let tmp = null == stageId;
  if (!tmp) {
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    const _HermesInternal = HermesInternal;
    tmp = !hiddenEventsAndStages.includes("stage-" + stageId);
  }
  let tmp4 = !tmp;
  if (tmp) {
    let hasItem = null != eventId;
    if (hasItem) {
      const hiddenEventsAndStages2 = closure_1.hiddenEventsAndStages;
      const _HermesInternal2 = HermesInternal;
      hasItem = hiddenEventsAndStages2.includes("event-" + eventId);
    }
    tmp4 = hasItem;
  }
  return tmp4;
};
prototype["getState"] = function getState() {
  return closure_1;
};
LiveChannelNoticesStore.displayName = "LiveChannelNoticesStore";
LiveChannelNoticesStore.persistKey = "liveChannelNotices_v2";
const liveChannelNoticesStore = new LiveChannelNoticesStore(dispatcherDefault, {
  LIVE_CHANNEL_NOTICE_HIDE: function handleHideNotice(arg0) {
    ({ eventId, stageId } = arg0);
    if (null != eventId) {
      const prop = closure_1.hiddenEventsAndStages;
      const _HermesInternal2 = HermesInternal;
      prop.push("event-" + eventId);
    } else if (null != stageId) {
      const prop1 = closure_1.hiddenEventsAndStages;
      const _HermesInternal = HermesInternal;
      prop1.push("stage-" + stageId);
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    let combined;
    combined = "event-" + guildScheduledEvent.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    const hasItem = hiddenEventsAndStages.includes(combined);
    let tmp3 = !hasItem;
    if (hasItem) {
      tmp3 = guildScheduledEvent.status !== combined.CANCELED && guildScheduledEvent.status !== tmp4.COMPLETED;
      const tmp5 = guildScheduledEvent.status !== combined.CANCELED && guildScheduledEvent.status !== tmp4.COMPLETED;
    }
    if (!tmp3) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    let combined;
    combined = "event-" + guildScheduledEvent.guildScheduledEvent.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  },
  STAGE_INSTANCE_DELETE: function handleStageUpdate(instance) {
    let combined;
    combined = "stage-" + instance.instance.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  }
});
const result = set.fileFinishedImporting("modules/guild_scheduled_events/LiveChannelNoticesStore.tsx");

export default liveChannelNoticesStore;
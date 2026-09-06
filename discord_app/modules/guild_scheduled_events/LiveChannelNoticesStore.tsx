// === Module 16185: LiveChannelNoticesStore ===

// Module 16185 (LiveChannelNoticesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 1963 */;
import size from "module_2" /* 2 */;

const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
let global = { hiddenEventsAndStages: [] };
const PersistedStore = initializeDefault.PersistedStore;
class LiveChannelNoticesStore extends PersistedStore {
}
const prototype = LiveChannelNoticesStore.prototype;
prototype["initialize"] = function initialize(hiddenEventsAndStages) {
  if (tmp) {
    global = hiddenEventsAndStages;
  }
};
prototype["isLiveChannelNoticeHidden"] = function isLiveChannelNoticeHidden(arg0) {
  ({ eventId, stageId } = arg0);
  let tmp = null == stageId;
  if (!tmp) {
    const hiddenEventsAndStages = global.hiddenEventsAndStages;
    const _HermesInternal = HermesInternal;
    tmp = !hiddenEventsAndStages.includes("stage-" + stageId);
  }
  let tmp4 = !tmp;
  if (tmp) {
    let hasItem = null != eventId;
    if (hasItem) {
      const hiddenEventsAndStages2 = global.hiddenEventsAndStages;
      const _HermesInternal2 = HermesInternal;
      hasItem = hiddenEventsAndStages2.includes("event-" + eventId);
    }
    tmp4 = hasItem;
  }
  return tmp4;
};
prototype["getState"] = function getState() {
  return global;
};
LiveChannelNoticesStore.displayName = "LiveChannelNoticesStore";
LiveChannelNoticesStore.persistKey = "liveChannelNotices_v2";
const liveChannelNoticesStore = new LiveChannelNoticesStore(DispatcherDefault, {
  LIVE_CHANNEL_NOTICE_HIDE: function handleHideNotice(arg0) {
    ({ eventId, stageId } = arg0);
    if (null != eventId) {
      const prop = global.hiddenEventsAndStages;
      const _HermesInternal2 = HermesInternal;
      prop.push("event-" + eventId);
    } else if (null != stageId) {
      const prop1 = global.hiddenEventsAndStages;
      const _HermesInternal = HermesInternal;
      prop1.push("stage-" + stageId);
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const combined = "event-" + guildScheduledEvent.id;
    const hiddenEventsAndStages = global.hiddenEventsAndStages;
    const hasItem = hiddenEventsAndStages.includes(combined);
    let tmp3 = !hasItem;
    if (hasItem) {
      tmp3 = guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED && guildScheduledEvent.status !== tmp4.COMPLETED;
      const tmp5 = guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED && guildScheduledEvent.status !== tmp4.COMPLETED;
    }
    if (!tmp3) {
      const prop = global.hiddenEventsAndStages;
      global.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    const combined = "event-" + guildScheduledEvent.guildScheduledEvent.id;
    const hiddenEventsAndStages = global.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = global.hiddenEventsAndStages;
      global.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  },
  STAGE_INSTANCE_DELETE: function handleStageUpdate(instance) {
    const combined = "stage-" + instance.instance.id;
    const hiddenEventsAndStages = global.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = global.hiddenEventsAndStages;
      global.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  }
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/LiveChannelNoticesStore.tsx");

export default liveChannelNoticesStore;
// === Module 16149: LiveChannelNoticesStore ===

// Module 16149 (LiveChannelNoticesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import size from "module_2" /* 2 */;

let closure_1;

const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
const PersistedStore = get_initializedDefault.PersistedStore;
class LiveChannelNoticesStore extends PersistedStore {
  initialize(hiddenEventsAndStages) {
    const tmp = null != hiddenEventsAndStages && null != hiddenEventsAndStages.hiddenEventsAndStages;
    if (tmp) {
      closure_1 = hiddenEventsAndStages;
    }
  }
  isLiveChannelNoticeHidden(arg0) {
    let eventId;
    let stageId;
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
  }
  getState() {
    return closure_1;
  }
}
const prototype = LiveChannelNoticesStore.prototype;
LiveChannelNoticesStore.displayName = "LiveChannelNoticesStore";
LiveChannelNoticesStore.persistKey = "liveChannelNotices_v2";
const obj = {
  LIVE_CHANNEL_NOTICE_HIDE: function handleHideNotice(arg0) {
    let eventId;
    let stageId;
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
    const combined = "event-" + guildScheduledEvent.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    const hasItem = hiddenEventsAndStages.includes(combined);
    let tmp3 = !hasItem;
    if (hasItem) {
      tmp3 = guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED && guildScheduledEvent.status !== tmp4.COMPLETED;
    }
    if (!tmp3) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    const combined = "event-" + guildScheduledEvent.guildScheduledEvent.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  },
  STAGE_INSTANCE_DELETE: function handleStageUpdate(instance) {
    const combined = "stage-" + instance.instance.id;
    const hiddenEventsAndStages = closure_1.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_1.hiddenEventsAndStages;
      closure_1.hiddenEventsAndStages = prop.filter((item) => item !== combined);
    }
  }
};
const liveChannelNoticesStore = new LiveChannelNoticesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/LiveChannelNoticesStore.tsx");

export default liveChannelNoticesStore;
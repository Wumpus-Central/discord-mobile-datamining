// === Module 16871: initialize ===

// Module 16871 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;

const GuildScheduledEventStatus = GUILD_EVENT_MAX_NAME_LENGTH.GuildScheduledEventStatus;
let closure_1 = {};
const PersistedStore = initializeDefault.PersistedStore;
class EventBannerStore extends PersistedStore {
}
const prototype = EventBannerStore.prototype;
prototype["initialize"] = function initialize(dismissedEventIds) {
  if (null != dismissedEventIds) {
    dismissedEventIds = dismissedEventIds.dismissedEventIds;
    if (dismissedEventIds == null) {
      dismissedEventIds = {};
    }
  }
};
prototype["isEventDismissed"] = function isEventDismissed(id) {
  return null != table[id];
};
prototype["getState"] = function getState() {
  return { dismissedEventIds: closure_1 };
};
EventBannerStore.displayName = "EventBannerStore";
EventBannerStore.persistKey = "EventBanner";
const eventBannerStore = new EventBannerStore(dispatcherDefault, {
  EVENT_BANNER_DISMISS: function handleDismiss(eventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[eventId.eventId] = true;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED) {
      if (guildScheduledEvent.status !== tmp3.COMPLETED) {
        return false;
      }
    }
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guildScheduledEvent.id;
      delete tmp[tmp2];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guildScheduledEvent.id;
      delete tmp[tmp2];
    }
  }
});
const result = set.fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;
// === Module 15906: initialize ===

// Module 15906 (initialize)
import { GuildScheduledEventStatus } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { PersistedStore } from "initialize";

let closure_1 = {};
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
const eventBannerStore = new EventBannerStore(require("dispatcher"), {
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
const result = require("dispatcher").fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;
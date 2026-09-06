// === Module 17055: EventBannerStore ===

// Module 17055 (EventBannerStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 1963 */;
import size from "module_2" /* 2 */;

const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
let dismissedEventIds = {};
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
  return null != obj[id];
};
prototype["getState"] = function getState() {
  dismissedEventIds = { dismissedEventIds };
  return dismissedEventIds;
};
EventBannerStore.displayName = "EventBannerStore";
EventBannerStore.persistKey = "EventBanner";
dismissedEventIds = {
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
};
const eventBannerStore = new EventBannerStore(DispatcherDefault, dismissedEventIds);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;
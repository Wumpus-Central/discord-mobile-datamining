// discord_app/modules/guild_scheduled_events/EventBannerStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "GuildScheduledEventsConstants.tsx";

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
const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;
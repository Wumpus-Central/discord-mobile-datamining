// discord_app/modules/guild_scheduled_events/EventBannerStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
let dismissedEventIds = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class EventBannerStore extends PersistedStore {
  initialize(dismissedEventIds) {
    if (null != dismissedEventIds) {
      dismissedEventIds = dismissedEventIds.dismissedEventIds;
      if (dismissedEventIds == null) {
        dismissedEventIds = {};
      }
    }
  }
  isEventDismissed(id) {
    return null != obj[id];
  }
  getState() {
    dismissedEventIds = { dismissedEventIds };
    return dismissedEventIds;
  }
}
const prototype = EventBannerStore.prototype;
EventBannerStore.displayName = "EventBannerStore";
EventBannerStore.persistKey = "EventBanner";
dismissedEventIds = {
  EVENT_BANNER_DISMISS: function handleDismiss(eventId) {
    const obj = {};
    eventId = eventId.eventId;
    const merged = Object.assign(obj);
    obj[eventId] = true;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    let obj;
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED) {
      if (guildScheduledEvent.status !== tmp.COMPLETED) {
        return false;
      }
    }
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[guildScheduledEvent.id];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    let obj;
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[guildScheduledEvent.id];
    }
  },
};
const eventBannerStore = new EventBannerStore(DispatcherDefault, dismissedEventIds);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;

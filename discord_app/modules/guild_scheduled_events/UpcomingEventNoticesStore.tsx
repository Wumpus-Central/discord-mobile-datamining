// discord_app/modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildScheduledEventUtils from "GuildScheduledEventUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

require = fn;
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventStatus: closure_4, UpcomingGuildEventNoticeTypes: hasOwnProperty } =
  GuildScheduledEventsConstants);
let obj = {};
obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class UpcomingEventNoticesStore extends PersistedStore {}
const prototype = UpcomingEventNoticesStore.prototype;
prototype["initialize"] = function initialize(upcomingEventDismissals) {
  this.waitFor(AuthenticationStore, GuildScheduledEventStore);
  if (null != upcomingEventDismissals) {
    let prop = upcomingEventDismissals.upcomingEventDismissals;
    if (prop == null) {
      prop = {};
    }
    let prop1 = upcomingEventDismissals.upcomingEventSeenTimestamps;
    if (prop1 == null) {
      prop1 = {};
    }
  }
};
prototype["getGuildEventNoticeDismissalTime"] = function getGuildEventNoticeDismissalTime(arg0) {
  return obj[arg0];
};
prototype["getAllEventDismissals"] = function getAllEventDismissals() {
  return obj;
};
prototype["getUpcomingNoticeSeenTime"] = function getUpcomingNoticeSeenTime(arg0) {
  return obj[arg0];
};
prototype["getAllUpcomingNoticeSeenTimes"] = function getAllUpcomingNoticeSeenTimes() {
  return obj;
};
prototype["getState"] = function getState() {
  obj = { upcomingEventDismissals: obj, upcomingEventSeenTimestamps: obj };
  return obj;
};
UpcomingEventNoticesStore.displayName = "UpcomingEventNoticesStore";
UpcomingEventNoticesStore.persistKey = "UpcomingEventNotices";
obj = {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[eventId.eventId] = Date.now();
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (!tmp4) {
      const id = guildScheduledEvent.id;
      obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
      obj = {};
      const merged1 = Object.assign(obj);
      delete tmp[tmp2];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
    obj = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === AuthenticationStore.getId()) {
      const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == obj[guildEventId]) {
            obj = GuildScheduledEventUtils;
            if (
              obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, obj[guildEventId], false) ===
              constants2.NEW_EVENT
            ) {
              obj = {};
              const merged = Object.assign(obj);
              const _Date = Date;
              obj[guildEventId] = Date.now();
            }
          }
        }
      }
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function handleMarkUpcomingNoticeAsSeen(guildEventId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[guildEventId.guildEventId] = Date.now();
  },
};
const upcomingEventNoticesStore = new UpcomingEventNoticesStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default upcomingEventNoticesStore;

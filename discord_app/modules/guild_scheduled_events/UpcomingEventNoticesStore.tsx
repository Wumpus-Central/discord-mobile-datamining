// === Module 9803: UpcomingEventNoticesStore ===

// Module 9803 (UpcomingEventNoticesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildScheduledEventUtils from "GuildScheduledEventUtils" /* 9804 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7636 */;

require = fn;
const GuildScheduledEventsConstants = fn(1964);
({ GuildScheduledEventStatus: closure_4, UpcomingGuildEventNoticeTypes: hasOwnProperty } = GuildScheduledEventsConstants);
let upcomingEventSeenTimestamps = {};
const PersistedStore = initializeDefault.PersistedStore;
class UpcomingEventNoticesStore extends PersistedStore {
}
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
  return obj2[arg0];
};
prototype["getAllEventDismissals"] = function getAllEventDismissals() {
  return obj2;
};
prototype["getUpcomingNoticeSeenTime"] = function getUpcomingNoticeSeenTime(arg0) {
  return obj[arg0];
};
prototype["getAllUpcomingNoticeSeenTimes"] = function getAllUpcomingNoticeSeenTimes() {
  return obj;
};
prototype["getState"] = function getState() {
  upcomingEventSeenTimestamps = { upcomingEventDismissals: obj2, upcomingEventSeenTimestamps };
  return upcomingEventSeenTimestamps;
};
UpcomingEventNoticesStore.displayName = "UpcomingEventNoticesStore";
UpcomingEventNoticesStore.persistKey = "UpcomingEventNotices";
upcomingEventSeenTimestamps = {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[eventId.eventId] = Date.now();
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (!tmp4) {
      const id = guildScheduledEvent.id;
      let obj = {};
      const merged = Object.assign(obj2);
      delete tmp[tmp2];
      obj2 = {};
      const merged1 = Object.assign(obj);
      delete tmp[tmp2];
      obj = obj2;
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(arg0) {
    let obj = {};
    const merged = Object.assign(obj2);
    delete tmp[tmp2];
    obj2 = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
    obj = obj2;
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === AuthenticationStore.getId()) {
      const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == obj2[guildEventId]) {
            const obj = GuildScheduledEventUtils;
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, obj[guildEventId], false) === constants2.NEW_EVENT) {
              obj2 = {};
              const merged = Object.assign(obj2);
              const _Date = Date;
              obj2[guildEventId] = Date.now();
            }
          }
        }
      }
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function handleMarkUpcomingNoticeAsSeen(guildEventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildEventId.guildEventId] = Date.now();
  }
};
const upcomingEventNoticesStore = new UpcomingEventNoticesStore(DispatcherDefault, upcomingEventSeenTimestamps);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default upcomingEventNoticesStore;
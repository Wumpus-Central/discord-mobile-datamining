// === Module 9196: UpcomingEventNoticesStore ===

// Module 9196 (UpcomingEventNoticesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildScheduledEventUtils from "GuildScheduledEventUtils" /* 9197 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ GuildScheduledEventStatus: closure_4, UpcomingGuildEventNoticeTypes: hasOwnProperty } = GuildScheduledEventsConstants);
let obj2 = {};
let upcomingEventSeenTimestamps = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class UpcomingEventNoticesStore extends PersistedStore {
  initialize(upcomingEventDismissals) {
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
  }
  getGuildEventNoticeDismissalTime(arg0) {
    return obj2[arg0];
  }
  getAllEventDismissals() {
    return obj2;
  }
  getUpcomingNoticeSeenTime(arg0) {
    return obj[arg0];
  }
  getAllUpcomingNoticeSeenTimes() {
    return obj;
  }
  getState() {
    upcomingEventSeenTimestamps = { upcomingEventDismissals: obj2, upcomingEventSeenTimestamps };
    return upcomingEventSeenTimestamps;
  }
}
const prototype = UpcomingEventNoticesStore.prototype;
UpcomingEventNoticesStore.displayName = "UpcomingEventNoticesStore";
UpcomingEventNoticesStore.persistKey = "UpcomingEventNotices";
upcomingEventSeenTimestamps = {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    const obj = {};
    eventId = eventId.eventId;
    const merged = Object.assign(obj);
    obj[eventId] = Date.now();
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const tmp2 = guildScheduledEvent.status !== constants.CANCELED && guildScheduledEvent.status !== tmp.COMPLETED;
    if (!tmp2) {
      const id = guildScheduledEvent.id;
      let obj = {};
      const merged = Object.assign(obj2);
      delete obj[id];
      const obj3 = {};
      const merged1 = Object.assign(obj);
      delete obj[id];
      obj = obj3;
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    const id = guildScheduledEvent.guildScheduledEvent.id;
    let obj = {};
    const merged = Object.assign(obj2);
    delete obj[id];
    const obj3 = {};
    const merged1 = Object.assign(obj);
    delete obj[id];
    obj = obj3;
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    let obj;
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === AuthenticationStore.getId()) {
      const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == obj2[guildEventId]) {
            const tmp3 = obj[guildEventId];
            obj = GuildScheduledEventUtils;
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, tmp3, false) === hasOwnProperty.NEW_EVENT) {
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
    guildEventId = guildEventId.guildEventId;
    const merged = Object.assign(obj);
    obj[guildEventId] = Date.now();
  }
};
const upcomingEventNoticesStore = new UpcomingEventNoticesStore(DispatcherDefault, upcomingEventSeenTimestamps);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default upcomingEventNoticesStore;
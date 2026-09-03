// === Module 9649: initialize ===

// Module 9649 (initialize)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getNextShownUpcomingEventNoticeType from "getNextShownUpcomingEventNoticeType" /* 9650 */;
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "scheduledEventSort" /* 7281 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;

require = arg1;
({ GuildScheduledEventStatus: c4, UpcomingGuildEventNoticeTypes: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
let closure_6 = {};
let closure_7 = {};
const PersistedStore = initializeDefault.PersistedStore;
class UpcomingEventNoticesStore extends PersistedStore {
}
const prototype = UpcomingEventNoticesStore.prototype;
prototype["initialize"] = function initialize(upcomingEventDismissals) {
  this.waitFor(closure_2, closure_3);
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
  return table[arg0];
};
prototype["getAllEventDismissals"] = function getAllEventDismissals() {
  return closure_6;
};
prototype["getUpcomingNoticeSeenTime"] = function getUpcomingNoticeSeenTime(arg0) {
  return dependencyMap[arg0];
};
prototype["getAllUpcomingNoticeSeenTimes"] = function getAllUpcomingNoticeSeenTimes() {
  return closure_7;
};
prototype["getState"] = function getState() {
  return { upcomingEventDismissals: closure_6, upcomingEventSeenTimestamps: closure_7 };
};
UpcomingEventNoticesStore.displayName = "UpcomingEventNoticesStore";
UpcomingEventNoticesStore.persistKey = "UpcomingEventNotices";
const upcomingEventNoticesStore = new UpcomingEventNoticesStore(dispatcherDefault, {
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
      const merged = Object.assign(obj);
      delete tmp[tmp2];
      obj = {};
      const merged1 = Object.assign(obj);
      delete tmp[tmp2];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(arg0) {
    let obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
    obj = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === id.getId()) {
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == obj[guildEventId]) {
            obj = getNextShownUpcomingEventNoticeType;
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, dependencyMap[guildEventId], false) === constants2.NEW_EVENT) {
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
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildEventId.guildEventId] = Date.now();
  }
});
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default upcomingEventNoticesStore;
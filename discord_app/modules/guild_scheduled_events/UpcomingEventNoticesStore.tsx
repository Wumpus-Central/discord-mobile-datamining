// discord_app/modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx
import fetchFingerprint from "fetchFingerprint";
import scheduledEventSort from "scheduledEventSort";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { PersistedStore } from "initialize";

let c4;
let c5;
const require = arg1;
({ GuildScheduledEventStatus: c4, UpcomingGuildEventNoticeTypes: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
let closure_6 = {};
let closure_7 = {};
class UpcomingEventNoticesStore extends PersistedStore {
}
const prototype = UpcomingEventNoticesStore.prototype;
prototype["initialize"] = function initialize(upcomingEventDismissals) {
  this.waitFor(fetchFingerprint, scheduledEventSort);
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
const upcomingEventNoticesStore = new UpcomingEventNoticesStore(require("dispatcher"), {
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
            obj = require(8327) /* getNextShownUpcomingEventNoticeType */;
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
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default upcomingEventNoticesStore;
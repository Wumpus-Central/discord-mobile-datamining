// === Module 16404: hideLiveChannelNotice ===

// Module 16404 (hideLiveChannelNotice)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    let obj = dispatcherDefault;
    obj = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: null, stageId: null };
    obj[1] = eventId;
    obj[2] = stageId;
    obj.dispatch(obj);
  }
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  let obj = dispatcherDefault;
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj);
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  let obj = dispatcherDefault;
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj);
};
export const dismissEventBanner = function dismissEventBanner(id) {
  let obj = dispatcherDefault;
  obj = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj);
};
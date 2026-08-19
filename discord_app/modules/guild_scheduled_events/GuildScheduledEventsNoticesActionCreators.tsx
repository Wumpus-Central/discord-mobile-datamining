// === Module 16278: hideLiveChannelNotice ===

// Module 16278 (hideLiveChannelNotice)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    const obj = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: null, stageId: null };
    obj[1] = eventId;
    obj[2] = stageId;
    obj.dispatch(obj);
  }
  tmp = null == eventId && null == stageId;
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  const obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj);
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  const obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj);
};
export const dismissEventBanner = function dismissEventBanner(id) {
  const obj = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj);
};
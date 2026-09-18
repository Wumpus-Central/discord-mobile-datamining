// === Module 17431: GuildScheduledEventsNoticesActionCreators ===

// Module 17431 (GuildScheduledEventsNoticesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    const obj2 = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    DispatcherDefault.dispatch(obj2);
  }
  tmp = null == eventId && null == stageId;
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  DispatcherDefault.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId });
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  DispatcherDefault.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId });
};
export const dismissEventBanner = function dismissEventBanner(id) {
  DispatcherDefault.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: id });
};
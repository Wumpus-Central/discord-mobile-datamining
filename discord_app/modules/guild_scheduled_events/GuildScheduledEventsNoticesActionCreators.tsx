// === Module 19112: GuildScheduledEventsNoticesActionCreators ===

// Module 19112 (GuildScheduledEventsNoticesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export function hideLiveChannelNotice(arg0) {
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    const obj2 = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    DispatcherDefault.dispatch(obj2);
  }
  tmp = null == eventId && null == stageId;
}
export function hideUpcomingEventNotice(eventId) {
  DispatcherDefault.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId });
}
export function markUpcomingEventNoticeAsSeen(guildEventId) {
  DispatcherDefault.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId });
}
export function dismissEventBanner(id) {
  DispatcherDefault.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: id });
}
// discord_app/modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx",
);

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    const obj = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    obj.dispatch(obj);
  }
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

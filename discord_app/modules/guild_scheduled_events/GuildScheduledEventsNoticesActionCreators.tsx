// discord_app/modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx",
);

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  let eventId;
  let stageId;
  ({ eventId, stageId } = arg0);
  const tmp = null == eventId && null == stageId;
  if (!tmp) {
    const obj2 = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj2);
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj2);
};
export const dismissEventBanner = function dismissEventBanner(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj2);
};

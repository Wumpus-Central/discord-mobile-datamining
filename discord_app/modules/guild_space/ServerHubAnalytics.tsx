// discord_app/modules/guild_space/ServerHubAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = {
  ALL_SYSTEM_MESSAGES: "all_system_messages",
  LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
  WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
  MUSIC_SYSTEM_MESSAGES: "music_system_messages",
};
export const ServerHubVisitSource = {
  WINNER_BADGE: "winner_badge",
  LEADER_BADGE: "leader_badge",
  LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message",
  MUSIC_SYSTEM_MESSAGE: "music_system_message",
};
export function trackServerHubToggleSetting(id, ALL_SYSTEM_MESSAGES, value) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, {
    guild_id: id,
    type: ALL_SYSTEM_MESSAGES,
    value,
  });
}
export function trackServerHubVisit(guild_id, source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_VISIT, { guild_id, source });
}
export function trackServerHubWidgetEditClicked(guild_id, widget_type, widget_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, widget_type };
  if (obj3.isDraftWidgetId(widget_id)) {
    let obj4 = {};
  } else {
    obj4 = { widget_id };
  }
  const merged = Object.assign(obj4);
  obj.track(AnalyticEvents.SERVER_HUB_WIDGET_EDIT_CLICKED, obj2);
}

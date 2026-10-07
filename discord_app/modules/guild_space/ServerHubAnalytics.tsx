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
};
export const ServerHubVisitSource = {
  WINNER_BADGE: "winner_badge",
  LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message",
};
export const trackServerHubToggleSetting = function trackServerHubToggleSetting(id, settingType, value) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, { guild_id: id, type: settingType, value });
};
export const trackServerHubVisit = function trackServerHubVisit(guild_id, source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_VISIT, { guild_id, source });
};

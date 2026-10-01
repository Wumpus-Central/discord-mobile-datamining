// === Module 17557: ServerHubAnalytics ===

// Module 17557 (ServerHubAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = { ALL_SYSTEM_MESSAGES: "all_system_messages", LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages", WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages" };
export const ServerHubVisitSource = { WINNER_BADGE: "winner_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message" };
export const trackServerHubToggleSetting = function trackServerHubToggleSetting(id, ALL_SYSTEM_MESSAGES, value) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, { guild_id: id, type: ALL_SYSTEM_MESSAGES, value });
};
export const trackServerHubVisit = function trackServerHubVisit(guild_id, source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SERVER_HUB_VISIT, { guild_id, source });
};
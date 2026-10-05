// === Module 17669: ServerHubAnalytics ===

// Module 17669 (ServerHubAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = { ALL_SYSTEM_MESSAGES: "all_system_messages", LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages", WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages" };
export const ServerHubVisitSource = { WINNER_BADGE: "winner_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message" };
export const trackServerHubToggleSetting = function trackServerHubToggleSetting(id, settingType, value) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: id, type: settingType, value };
  obj.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, obj2);
};
export const trackServerHubVisit = function trackServerHubVisit(guild_id, source) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, source };
  obj.track(AnalyticEvents.SERVER_HUB_VISIT, obj2);
};
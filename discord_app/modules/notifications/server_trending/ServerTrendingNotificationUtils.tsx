// === Module 16810: ServerTrendingNotificationUtils ===

// Module 16810 (ServerTrendingNotificationUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4619 */;
import NotificationConstants from "NotificationConstants" /* 4739 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = UserSettings.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, server_trending_notifications });
}
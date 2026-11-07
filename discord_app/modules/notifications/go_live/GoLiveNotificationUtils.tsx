// === Module 18276: go_live/GoLiveNotificationUtils ===

// Module 18276 (go_live/GoLiveNotificationUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 4965 */;
import NotificationConstants from "NotificationConstants" /* 5085 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/go_live/GoLiveNotificationUtils.tsx");

export function onNotifyServerMembersOnGoLiveSettingsChanged(notify_server_members_on_go_live) {
  const NotifyServerMembersOnGoLive = UserSettings.NotifyServerMembersOnGoLive;
  NotifyServerMembersOnGoLive.updateSetting(notify_server_members_on_go_live);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, notify_server_members_on_go_live });
}
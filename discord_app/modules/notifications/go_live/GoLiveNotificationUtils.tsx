// === Module 17830: go_live/GoLiveNotificationUtils ===

// Module 17830 (go_live/GoLiveNotificationUtils)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 4833 */;
import NotificationConstants from "NotificationConstants" /* 4950 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/go_live/GoLiveNotificationUtils.tsx");

export function onNotifyServerMembersOnGoLiveSettingsChanged(notify_server_members_on_go_live) {
  const NotifyServerMembersOnGoLive = UserSettings.NotifyServerMembersOnGoLive;
  NotifyServerMembersOnGoLive.updateSetting(notify_server_members_on_go_live);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, notify_server_members_on_go_live });
}
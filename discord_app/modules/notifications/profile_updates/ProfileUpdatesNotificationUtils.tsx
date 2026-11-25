// === Module 17086: ProfileUpdatesNotificationUtils ===

// Module 17086 (ProfileUpdatesNotificationUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4837 */;
import NotificationConstants from "NotificationConstants" /* 4957 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = UserSettings.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, profile_updates_notifications });
}
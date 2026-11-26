// === Module 17145: SummaryReminderNotificationUtils ===

// Module 17145 (SummaryReminderNotificationUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import UserSettings from "UserSettings" /* 4868 */;
import NotificationConstants from "NotificationConstants" /* 4988 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = UserSettings.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, summary_reminder_notifications });
}
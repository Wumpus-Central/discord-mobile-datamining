// === Module 15784: SummaryReminderNotificationUtils ===

// Module 15784 (SummaryReminderNotificationUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2019 */;
import NotificationConstants from "NotificationConstants" /* 4408 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = UserSettings.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, summary_reminder_notifications });
};
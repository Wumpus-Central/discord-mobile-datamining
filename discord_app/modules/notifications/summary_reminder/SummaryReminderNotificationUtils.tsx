// discord_app/modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
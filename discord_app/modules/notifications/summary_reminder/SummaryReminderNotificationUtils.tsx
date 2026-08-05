// discord_app/modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = expandEventProperties;
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
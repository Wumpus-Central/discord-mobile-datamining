// === Module 14821: onUpcomingServerEventNotificationSettingsChanged ===

// Module 14821 (onUpcomingServerEventNotificationSettingsChanged)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = explicitContentFromProto.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  const obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
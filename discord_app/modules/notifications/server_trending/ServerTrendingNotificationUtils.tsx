// === Module 14818: onServerTrendingNotificationSettingsChanged ===

// Module 14818 (onServerTrendingNotificationSettingsChanged)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/notifications/server_trending/ServerTrendingNotificationUtils.tsx");

export const onServerTrendingNotificationSettingsChanged = function onServerTrendingNotificationSettingsChanged(server_trending_notifications) {
  const EnableServerTrendingNotifications = explicitContentFromProto.EnableServerTrendingNotifications;
  EnableServerTrendingNotifications.updateSetting(server_trending_notifications);
  const obj = { update_type: constants.ACCOUNT, server_trending_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
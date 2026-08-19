// === Module 14805: onGoLiveNotificationSettingsChanged ===

// Module 14805 (onGoLiveNotificationSettingsChanged)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const result = obj132.fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = explicitContentFromProto.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  const obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
// === Module 14796: onChange ===

// Module 14796 (onChange)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4033 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = explicitContentFromProto.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = create.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  const obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
}
const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PTtxi9);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/+OQEs"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = explicitContentFromProto.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== create.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
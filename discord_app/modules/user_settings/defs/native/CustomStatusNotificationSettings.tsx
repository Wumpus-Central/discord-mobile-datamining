// === Module 16843: CustomStatusNotificationSettings ===

// Module 16843 (CustomStatusNotificationSettings)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import UserSettings from "UserSettings" /* 4799 */;
import NotificationConstants from "NotificationConstants" /* 4916 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11205 */;
import size from "module_2" /* 2 */;

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = preloaded_user_settings.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, custom_status_push_notifications });
  const obj2 = { update_type: constants.ACCOUNT, custom_status_push_notifications };
}
const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PTtxi9);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["/+OQEs"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== preloaded_user_settings.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
// discord_app/modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import NotificationConstants from "../../../notifications/NotificationConstants.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = preloaded_user_settings.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(
    custom_status_push_notifications
      ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED
      : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED,
  );
  const obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
}
const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
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
  onValueChange: onChange,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };

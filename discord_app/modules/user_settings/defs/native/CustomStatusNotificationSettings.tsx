// discord_app/modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import AccountNotificationFlags from "../../../notifications/NotificationConstants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = explicitContentFromProto.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = create.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(
    custom_status_push_notifications
      ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED
      : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED,
  );
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
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
  onValueChange: onChange,
});
let obj = {
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
  onValueChange: onChange,
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };

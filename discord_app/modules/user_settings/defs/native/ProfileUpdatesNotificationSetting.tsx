// discord_app/modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import apexExperiment from "../../../notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx";
import onProfileUpdatesNotificationSettingsChanged from "../../../notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: onProfileUpdatesNotificationSettingsChanged.onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  },
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: onProfileUpdatesNotificationSettingsChanged.onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  },
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;

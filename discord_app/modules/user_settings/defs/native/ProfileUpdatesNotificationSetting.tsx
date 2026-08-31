// === Module 15070: toggle ===

// Module 15070 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import apexExperiment from "apexExperiment" /* 15071 */;
import onProfileUpdatesNotificationSettingsChanged from "onProfileUpdatesNotificationSettingsChanged" /* 15072 */;
import createToggle from "createToggle" /* 11031 */;

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
  }
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
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
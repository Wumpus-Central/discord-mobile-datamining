// === Module 15051: toggle ===

// Module 15051 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import apexExperiment from "apexExperiment" /* 15052 */;
import onProfileUpdatesNotificationSettingsChanged from "onProfileUpdatesNotificationSettingsChanged" /* 15053 */;
import createToggle from "createToggle" /* 10988 */;

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
// === Module 15332: toggle ===

// Module 15332 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import apexExperiment from "apexExperiment" /* 15333 */;
import onProfileUpdatesNotificationSettingsChanged from "onProfileUpdatesNotificationSettingsChanged" /* 15334 */;
import createToggle from "createToggle" /* 11288 */;

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
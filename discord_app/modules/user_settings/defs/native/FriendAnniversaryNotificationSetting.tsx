// === Module 14870: toggle ===

// Module 14870 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import apexExperimentDefault from "apexExperiment" /* 8333 */;
import onFriendAnniversaryNotificationSettingsChanged from "onFriendAnniversaryNotificationSettingsChanged" /* 14871 */;
import createToggle from "createToggle" /* 10708 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BVO96v);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["00TNo7"]);
  },
  onValueChange: onFriendAnniversaryNotificationSettingsChanged.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BVO96v);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["00TNo7"]);
  },
  onValueChange: onFriendAnniversaryNotificationSettingsChanged.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
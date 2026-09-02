// === Module 15325: toggle ===

// Module 15325 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import apexExperimentDefault from "apexExperiment" /* 7999 */;
import onFriendAnniversaryNotificationSettingsChanged from "onFriendAnniversaryNotificationSettingsChanged" /* 15326 */;
import createToggle from "createToggle" /* 11288 */;

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
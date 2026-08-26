// === Module 14982: toggle ===

// Module 14982 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 8302 */;
import apexExperiment from "apexExperiment" /* 14983 */;
import onFriendOnlineNotificationSettingsChanged from "onFriendOnlineNotificationSettingsChanged" /* 14984 */;
import createToggle from "createToggle" /* 10584 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E6O06k);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendOnlineNotifications.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E6O06k);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendOnlineNotifications.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
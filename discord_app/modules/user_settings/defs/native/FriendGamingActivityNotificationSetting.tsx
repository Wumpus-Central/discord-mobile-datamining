// === Module 15035: toggle ===

// Module 15035 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import onFriendGamingActivityNotificationSettingsChanged from "onFriendGamingActivityNotificationSettingsChanged" /* 15036 */;
import createToggle from "createToggle" /* 11006 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["yq/aPt"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Amy1fz);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: onFriendGamingActivityNotificationSettingsChanged.onFriendGamingActivityNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["yq/aPt"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Amy1fz);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: onFriendGamingActivityNotificationSettingsChanged.onFriendGamingActivityNotificationSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
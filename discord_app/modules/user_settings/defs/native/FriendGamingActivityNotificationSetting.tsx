// === Module 14876: toggle ===

// Module 14876 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import onFriendGamingActivityNotificationSettingsChanged from "onFriendGamingActivityNotificationSettingsChanged" /* 14877 */;
import createToggle from "createToggle" /* 10708 */;

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
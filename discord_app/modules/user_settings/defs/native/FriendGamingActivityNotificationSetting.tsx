// === Module 14812: toggle ===

// Module 14812 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import onFriendGamingActivityNotificationSettingsChanged from "onFriendGamingActivityNotificationSettingsChanged" /* 14813 */;
import createToggle from "createToggle" /* 10669 */;

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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
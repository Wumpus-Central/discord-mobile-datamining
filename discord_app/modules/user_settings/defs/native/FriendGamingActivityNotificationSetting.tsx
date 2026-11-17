// === Module 18186: FriendGamingActivityNotificationSetting ===

// Module 18186 (FriendGamingActivityNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 18187 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["yq/aPt"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.Amy1fz);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: FriendGamingActivityNotificationUtils.onFriendGamingActivityNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
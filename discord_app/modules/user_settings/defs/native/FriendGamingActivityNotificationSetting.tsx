// === Module 17828: FriendGamingActivityNotificationSetting ===

// Module 17828 (FriendGamingActivityNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 17829 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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
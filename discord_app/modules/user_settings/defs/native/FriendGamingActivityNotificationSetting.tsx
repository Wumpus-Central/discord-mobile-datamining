// === Module 15264: FriendGamingActivityNotificationSetting ===

// Module 15264 (FriendGamingActivityNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import FriendGamingActivityNotificationUtils from "FriendGamingActivityNotificationUtils" /* 15265 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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
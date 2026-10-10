// === Module 15779: FriendOnlineNotificationSetting ===

// Module 15779 (FriendOnlineNotificationSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15780 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["uvIi/4"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.E6O06k);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendOnlineNotifications.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onFriendOnlineNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
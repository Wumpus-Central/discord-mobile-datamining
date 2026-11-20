// === Module 16803: FriendOnlineNotificationSetting ===

// Module 16803 (FriendOnlineNotificationSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16804 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
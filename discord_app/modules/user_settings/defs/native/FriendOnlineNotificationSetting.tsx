// === Module 15028: FriendOnlineNotificationSetting ===

// Module 15028 (FriendOnlineNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15029 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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
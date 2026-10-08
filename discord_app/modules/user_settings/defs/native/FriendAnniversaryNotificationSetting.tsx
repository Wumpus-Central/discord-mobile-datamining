// === Module 15601: FriendAnniversaryNotificationSetting ===

// Module 15601 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15602 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BVO96v);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["00TNo7"]);
  },
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
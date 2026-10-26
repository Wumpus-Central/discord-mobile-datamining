// === Module 16858: FriendAnniversaryNotificationSetting ===

// Module 16858 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4799 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 16859 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
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
// === Module 15599: FriendStreamNotificationsSetting ===

// Module 15599 (FriendStreamNotificationsSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 15600 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.FEFn90);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.StreamNotificationsEnabled.useSetting,
  onValueChange: GoLiveNotificationUtils.onGoLiveNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
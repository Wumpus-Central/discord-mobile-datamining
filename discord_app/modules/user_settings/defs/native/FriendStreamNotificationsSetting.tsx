// === Module 17078: FriendStreamNotificationsSetting ===

// Module 17078 (FriendStreamNotificationsSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 17079 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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
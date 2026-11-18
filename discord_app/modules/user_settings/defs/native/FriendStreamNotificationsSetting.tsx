// === Module 16983: FriendStreamNotificationsSetting ===

// Module 16983 (FriendStreamNotificationsSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4648 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import GoLiveNotificationUtils from "GoLiveNotificationUtils" /* 16984 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
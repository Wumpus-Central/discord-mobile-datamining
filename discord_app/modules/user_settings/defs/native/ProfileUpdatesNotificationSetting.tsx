// === Module 17753: ProfileUpdatesNotificationSetting ===

// Module 17753 (ProfileUpdatesNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 17754 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.VxBO2F);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.F4VeBe);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableProfileUpdatesNotifications.useSetting,
  onValueChange: ProfileUpdatesNotificationUtils.onProfileUpdatesNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
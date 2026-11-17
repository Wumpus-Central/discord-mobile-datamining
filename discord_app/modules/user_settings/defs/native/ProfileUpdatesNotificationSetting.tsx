// === Module 18147: ProfileUpdatesNotificationSetting ===

// Module 18147 (ProfileUpdatesNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 5131 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import ProfileUpdatesNotificationUtils from "ProfileUpdatesNotificationUtils" /* 18148 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
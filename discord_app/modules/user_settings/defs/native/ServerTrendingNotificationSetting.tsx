// === Module 15572: ServerTrendingNotificationSetting ===

// Module 15572 (ServerTrendingNotificationSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 15573 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q3VWjI);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wc1RcU);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableServerTrendingNotifications.useSetting,
  onValueChange: ServerTrendingNotificationUtils.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
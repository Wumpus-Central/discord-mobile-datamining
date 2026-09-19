// === Module 15769: FriendAnniversaryNotificationSetting ===

// Module 15769 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8338 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15770 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
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
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return MobileFriendAnniversaryExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
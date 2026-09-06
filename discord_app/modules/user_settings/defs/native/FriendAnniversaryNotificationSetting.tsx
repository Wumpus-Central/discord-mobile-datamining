// === Module 15498: FriendAnniversaryNotificationSetting ===

// Module 15498 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8081 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 15499 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
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
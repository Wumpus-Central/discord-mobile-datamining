// === Module 18176: FriendAnniversaryNotificationSetting ===

// Module 18176 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import MobileNotifSettings from "MobileNotifSettings" /* 18154 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 18177 */;
import SettingBuilders_mod from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
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
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(toggle);
obj2.parent = MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY;
const toggle1 = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
export const RedesignFriendAnniversaryNotificationSetting = toggle1;
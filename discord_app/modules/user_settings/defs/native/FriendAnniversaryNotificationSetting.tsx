// === Module 17073: FriendAnniversaryNotificationSetting ===

// Module 17073 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17051 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 17074 */;
import SettingBuilders_mod from "SettingBuilders" /* 11914 */;
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
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3206.KEDd8y);
};
obj2.useDescription = undefined;
obj2.parent = MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY;
const toggle1 = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
export const RedesignFriendAnniversaryNotificationSetting = toggle1;
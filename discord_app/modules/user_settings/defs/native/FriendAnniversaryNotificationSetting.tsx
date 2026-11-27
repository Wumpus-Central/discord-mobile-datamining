// === Module 17131: FriendAnniversaryNotificationSetting ===

// Module 17131 (FriendAnniversaryNotificationSetting)
import util from "util" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 17132 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
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
  return intl.string(_modDef3207.KEDd8y);
};
obj2.useDescription = undefined;
obj2.parent = MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY;
const toggle1 = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
export const RedesignFriendAnniversaryNotificationSetting = toggle1;
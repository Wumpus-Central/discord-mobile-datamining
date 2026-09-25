// === Module 15503: NotifyFriendsOnProfileUpdateSetting ===

// Module 15503 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import _modDef2684 from "module_2684" /* 2684 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 15504 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2684.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2684["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
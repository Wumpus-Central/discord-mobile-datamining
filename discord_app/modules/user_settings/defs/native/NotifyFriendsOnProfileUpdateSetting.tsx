// === Module 16156: NotifyFriendsOnProfileUpdateSetting ===

// Module 16156 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2678 from "module_2678" /* 2678 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16157 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2678.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2678["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
// === Module 17019: NotifyFriendsOnProfileUpdateSetting ===

// Module 17019 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2789 from "module_2789" /* 2789 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17020 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2789.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2789["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
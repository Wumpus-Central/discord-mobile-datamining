// === Module 16955: NotifyFriendsOnProfileUpdateSetting ===

// Module 16955 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2771 from "module_2771" /* 2771 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16956 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2771.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2771["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
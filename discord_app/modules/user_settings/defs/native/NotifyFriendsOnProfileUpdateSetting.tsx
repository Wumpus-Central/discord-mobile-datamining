// === Module 17285: NotifyFriendsOnProfileUpdateSetting ===

// Module 17285 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1112 */;
import _modDef2925 from "module_2925" /* 2925 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17286 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2925.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2925["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
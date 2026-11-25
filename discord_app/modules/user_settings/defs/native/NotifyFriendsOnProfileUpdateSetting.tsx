// === Module 17560: NotifyFriendsOnProfileUpdateSetting ===

// Module 17560 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1112 */;
import _modDef3078 from "module_3078" /* 3078 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17561 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3078.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3078["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
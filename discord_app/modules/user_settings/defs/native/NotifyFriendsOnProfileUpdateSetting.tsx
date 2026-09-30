// === Module 15738: NotifyFriendsOnProfileUpdateSetting ===

// Module 15738 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import _modDef2685 from "module_2685" /* 2685 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 15739 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2685.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2685["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
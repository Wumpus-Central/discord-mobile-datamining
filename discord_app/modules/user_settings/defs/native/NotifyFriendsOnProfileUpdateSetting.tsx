// === Module 18652: NotifyFriendsOnProfileUpdateSetting ===

// Module 18652 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1113 */;
import _modDef2903 from "module_2903" /* 2903 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 18653 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2903.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2903["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
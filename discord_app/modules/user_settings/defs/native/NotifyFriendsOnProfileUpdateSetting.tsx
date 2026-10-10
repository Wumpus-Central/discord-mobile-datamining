// === Module 16300: NotifyFriendsOnProfileUpdateSetting ===

// Module 16300 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2766 from "module_2766" /* 2766 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16301 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2766.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2766["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
// === Module 16233: NotifyFriendsOnProfileUpdateSetting ===

// Module 16233 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2763 from "module_2763" /* 2763 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16234 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2763.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2763["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
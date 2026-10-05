// === Module 15821: NotifyFriendsOnProfileUpdateSetting ===

// Module 15821 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef2691 from "module_2691" /* 2691 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 15822 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2691.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2691["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
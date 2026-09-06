// === Module 15911: NotifyFriendsOnProfileUpdateSetting ===

// Module 15911 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2594 from "module_2594" /* 2594 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 15912 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2594.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2594["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
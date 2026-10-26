// === Module 17314: NotifyFriendsOnProfileUpdateSetting ===

// Module 17314 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1128 */;
import _modDef2736 from "module_2736" /* 2736 */;
import UserSettings from "UserSettings" /* 4799 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17315 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2736.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2736["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
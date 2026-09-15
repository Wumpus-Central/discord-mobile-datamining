// === Module 16017: NotifyFriendsOnProfileUpdateSetting ===

// Module 16017 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2595 from "module_2595" /* 2595 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16018 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2595.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2595["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
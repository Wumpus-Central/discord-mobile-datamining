// === Module 17617: NotifyFriendsOnProfileUpdateSetting ===

// Module 17617 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1112 */;
import _modDef3079 from "module_3079" /* 3079 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17618 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3079.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3079["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
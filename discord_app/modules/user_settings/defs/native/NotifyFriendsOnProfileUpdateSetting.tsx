// === Module 17356: NotifyFriendsOnProfileUpdateSetting ===

// Module 17356 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1125 */;
import _modDef2737 from "module_2737" /* 2737 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17357 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2737.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2737["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
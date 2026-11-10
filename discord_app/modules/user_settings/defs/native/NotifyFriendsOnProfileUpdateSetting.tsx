// === Module 18315: NotifyFriendsOnProfileUpdateSetting ===

// Module 18315 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1113 */;
import _modDef2864 from "module_2864" /* 2864 */;
import UserSettings from "UserSettings" /* 4967 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 18316 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
// === Module 17281: NotifyFriendsOnComeOnlineSetting ===

// Module 17281 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1112 */;
import _modDef2893 from "module_2893" /* 2893 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16804 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2893.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2893.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
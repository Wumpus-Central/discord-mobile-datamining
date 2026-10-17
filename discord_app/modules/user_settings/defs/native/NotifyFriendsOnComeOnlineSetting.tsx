// === Module 17014: NotifyFriendsOnComeOnlineSetting ===

// Module 17014 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2757 from "module_2757" /* 2757 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16562 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2757.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2757.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
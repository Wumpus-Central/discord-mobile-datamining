// === Module 17897: NotifyFriendsOnComeOnlineSetting ===

// Module 17897 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1114 */;
import _modDef2707 from "module_2707" /* 2707 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17426 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2707.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2707.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
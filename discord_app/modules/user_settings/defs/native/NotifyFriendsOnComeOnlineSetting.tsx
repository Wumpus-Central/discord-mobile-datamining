// === Module 17405: NotifyFriendsOnComeOnlineSetting ===

// Module 17405 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1112 */;
import _modDef2992 from "module_2992" /* 2992 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16927 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2992.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2992.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
// === Module 17461: NotifyFriendsOnComeOnlineSetting ===

// Module 17461 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1113 */;
import _modDef2891 from "module_2891" /* 2891 */;
import UserSettings from "UserSettings" /* 4648 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16987 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2891.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2891.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
// === Module 16301: NotifyFriendsOnComeOnlineSetting ===

// Module 16301 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import _modDef2650 from "module_2650" /* 2650 */;
import SettingsConstants from "SettingsConstants" /* 8319 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15845 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2650.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2650.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
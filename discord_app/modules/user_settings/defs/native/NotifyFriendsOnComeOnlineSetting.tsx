// === Module 16058: NotifyFriendsOnComeOnlineSetting ===

// Module 16058 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2563 from "module_2563" /* 2563 */;
import SettingsConstants from "SettingsConstants" /* 8111 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15623 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2563.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2563.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
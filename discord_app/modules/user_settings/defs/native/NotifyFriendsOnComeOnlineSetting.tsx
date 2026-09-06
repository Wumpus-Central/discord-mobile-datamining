// === Module 15910: NotifyFriendsOnComeOnlineSetting ===

// Module 15910 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2562 from "module_2562" /* 2562 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15502 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2562.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2562.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
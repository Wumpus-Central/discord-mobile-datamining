// === Module 16116: NotifyFriendsOnComeOnlineSetting ===

// Module 16116 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15605 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2731.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2731.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
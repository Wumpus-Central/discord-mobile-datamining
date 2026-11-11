// === Module 18485: NotifyFriendsOnComeOnlineSetting ===

// Module 18485 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1113 */;
import _modDef2853 from "module_2853" /* 2853 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 18020 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2853.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2853.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
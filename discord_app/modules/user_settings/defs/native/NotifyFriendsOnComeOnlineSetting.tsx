// === Module 17314: NotifyFriendsOnComeOnlineSetting ===

// Module 17314 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1128 */;
import _modDef2704 from "module_2704" /* 2704 */;
import UserSettings from "UserSettings" /* 4799 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16862 */;
import SettingBuilders from "SettingBuilders" /* 11206 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2704.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2704.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
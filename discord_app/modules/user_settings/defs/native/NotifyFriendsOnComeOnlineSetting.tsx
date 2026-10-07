// === Module 15857: NotifyFriendsOnComeOnlineSetting ===

// Module 15857 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef2687 from "module_2687" /* 2687 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15343 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2687.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2687.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
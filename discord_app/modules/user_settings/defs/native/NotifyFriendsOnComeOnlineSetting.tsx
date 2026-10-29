// === Module 17826: NotifyFriendsOnComeOnlineSetting ===

// Module 17826 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1125 */;
import _modDef2706 from "module_2706" /* 2706 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17372 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2706.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2706.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
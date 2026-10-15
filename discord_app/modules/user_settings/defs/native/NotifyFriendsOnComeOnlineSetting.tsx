// === Module 16907: NotifyFriendsOnComeOnlineSetting ===

// Module 16907 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2736 from "module_2736" /* 2736 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16451 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2736.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2736.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
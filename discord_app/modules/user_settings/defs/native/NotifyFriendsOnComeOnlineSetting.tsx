// === Module 17445: NotifyFriendsOnComeOnlineSetting ===

// Module 17445 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1112 */;
import _modDef2994 from "module_2994" /* 2994 */;
import UserSettings from "UserSettings" /* 4742 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16961 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2994.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2994.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
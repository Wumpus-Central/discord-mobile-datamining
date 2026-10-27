// === Module 17355: NotifyFriendsOnComeOnlineSetting ===

// Module 17355 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1125 */;
import _modDef2705 from "module_2705" /* 2705 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16904 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2705.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2705.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
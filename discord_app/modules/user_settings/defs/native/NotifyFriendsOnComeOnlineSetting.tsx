// === Module 18272: NotifyFriendsOnComeOnlineSetting ===

// Module 18272 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1113 */;
import _modDef2832 from "module_2832" /* 2832 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17816 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2832.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2832.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
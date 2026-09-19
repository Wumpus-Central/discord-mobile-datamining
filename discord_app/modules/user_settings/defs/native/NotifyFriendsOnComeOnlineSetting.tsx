// === Module 16231: NotifyFriendsOnComeOnlineSetting ===

// Module 16231 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import _modDef2648 from "module_2648" /* 2648 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15773 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2648.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2648.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
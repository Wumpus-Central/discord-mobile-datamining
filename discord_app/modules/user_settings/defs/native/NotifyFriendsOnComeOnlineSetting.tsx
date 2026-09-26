// === Module 15531: NotifyFriendsOnComeOnlineSetting ===

// Module 15531 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import _modDef2653 from "module_2653" /* 2653 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15057 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2653.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2653.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
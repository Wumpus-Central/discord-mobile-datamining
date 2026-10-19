// === Module 17047: NotifyFriendsOnComeOnlineSetting ===

// Module 17047 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1128 */;
import _modDef2694 from "module_2694" /* 2694 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16595 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2694.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2694.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
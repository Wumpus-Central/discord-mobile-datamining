// === Module 17556: NotifyFriendsOnComeOnlineSetting ===

// Module 17556 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1112 */;
import _modDef3046 from "module_3046" /* 3046 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17082 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3046.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3046.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
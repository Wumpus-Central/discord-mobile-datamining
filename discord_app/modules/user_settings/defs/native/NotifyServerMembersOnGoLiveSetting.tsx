// === Module 16943: NotifyServerMembersOnGoLiveSetting ===

// Module 16943 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2739 from "module_2739" /* 2739 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16944 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2739["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2739.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
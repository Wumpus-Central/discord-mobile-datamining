// === Module 17287: NotifyServerMembersOnGoLiveSetting ===

// Module 17287 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1112 */;
import _modDef2893 from "module_2893" /* 2893 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17288 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2893["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2893.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
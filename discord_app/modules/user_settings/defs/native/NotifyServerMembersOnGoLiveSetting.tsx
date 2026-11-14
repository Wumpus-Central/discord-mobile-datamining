// === Module 18611: NotifyServerMembersOnGoLiveSetting ===

// Module 18611 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1113 */;
import _modDef2869 from "module_2869" /* 2869 */;
import UserSettings from "UserSettings" /* 5131 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 18612 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2869["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2869.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
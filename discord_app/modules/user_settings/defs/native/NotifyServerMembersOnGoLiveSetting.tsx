// === Module 16302: NotifyServerMembersOnGoLiveSetting ===

// Module 16302 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2734 from "module_2734" /* 2734 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16303 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2734["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2734.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
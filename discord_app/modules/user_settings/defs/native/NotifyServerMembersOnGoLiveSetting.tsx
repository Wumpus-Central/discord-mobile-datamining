// === Module 17317: NotifyServerMembersOnGoLiveSetting ===

// Module 17317 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1128 */;
import _modDef2704 from "module_2704" /* 2704 */;
import UserSettings from "UserSettings" /* 4799 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17318 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2704["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2704.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
// === Module 17619: NotifyServerMembersOnGoLiveSetting ===

// Module 17619 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1112 */;
import _modDef3047 from "module_3047" /* 3047 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17620 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3047["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3047.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
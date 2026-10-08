// === Module 16119: NotifyServerMembersOnGoLiveSetting ===

// Module 16119 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16120 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2731["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2731.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
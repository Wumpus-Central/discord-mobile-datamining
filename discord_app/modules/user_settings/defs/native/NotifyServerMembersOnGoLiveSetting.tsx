// === Module 17069: NotifyServerMembersOnGoLiveSetting ===

// Module 17069 (NotifyServerMembersOnGoLiveSetting)
import util from "util" /* 1128 */;
import _modDef2694 from "module_2694" /* 2694 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17070 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2694["9l5u6A"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2694.QcmgBF);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
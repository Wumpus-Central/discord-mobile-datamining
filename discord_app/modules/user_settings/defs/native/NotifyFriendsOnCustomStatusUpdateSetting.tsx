// === Module 18649: NotifyFriendsOnCustomStatusUpdateSetting ===

// Module 18649 (NotifyFriendsOnCustomStatusUpdateSetting)
import util from "util" /* 1113 */;
import _modDef2871 from "module_2871" /* 2871 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 18650 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 18651 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2871.AOUyrx);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2871.bZ094C);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnCustomStatusUpdate.useSetting,
  onValueChange: NotifyFriendsOnCustomStatusUpdateUtils.onNotifyFriendsOnCustomStatusUpdateSettingsChanged,
  usePredicate() {
    return NotifyFriendsOnCustomStatusUpdateExperiment.useNotifyFriendsOnCustomStatusUpdateExperiment("NotifyFriendsOnCustomStatusUpdateSetting");
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnCustomStatusUpdateSetting.tsx");

export default toggle;
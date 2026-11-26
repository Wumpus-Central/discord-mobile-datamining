// === Module 17614: NotifyFriendsOnCustomStatusUpdateSetting ===

// Module 17614 (NotifyFriendsOnCustomStatusUpdateSetting)
import util from "util" /* 1112 */;
import _modDef3047 from "module_3047" /* 3047 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17615 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17616 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3047.AOUyrx);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3047.bZ094C);
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
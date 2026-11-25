// === Module 17557: NotifyFriendsOnCustomStatusUpdateSetting ===

// Module 17557 (NotifyFriendsOnCustomStatusUpdateSetting)
import util from "util" /* 1112 */;
import _modDef3046 from "module_3046" /* 3046 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17558 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17559 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3046.AOUyrx);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3046.bZ094C);
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
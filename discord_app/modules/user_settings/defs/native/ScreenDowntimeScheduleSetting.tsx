// === Module 15516: ScreenDowntimeScheduleSetting ===

// Module 15516 (ScreenDowntimeScheduleSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment" /* 7594 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14911 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dxlHN2);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["/071J7"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = FamilyCenterV3Experiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserLinks.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
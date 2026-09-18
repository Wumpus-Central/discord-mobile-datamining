// === Module 15732: ScreenDowntimeScheduleSetting ===

// Module 15732 (ScreenDowntimeScheduleSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 15129 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
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
    let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
    if (hasActiveParentLinks) {
      hasActiveParentLinks = obj.useHasActiveParentLinks();
    }
    return hasActiveParentLinks;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
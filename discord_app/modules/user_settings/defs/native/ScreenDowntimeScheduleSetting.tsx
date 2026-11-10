// === Module 17869: ScreenDowntimeScheduleSetting ===

// Module 17869 (ScreenDowntimeScheduleSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4967 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17160 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
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
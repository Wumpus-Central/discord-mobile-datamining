// === Module 16877: ScreenDowntimeScheduleSetting ===

// Module 16877 (ScreenDowntimeScheduleSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4799 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 16203 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePredicate() {
  let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
  if (hasActiveParentLinks) {
    hasActiveParentLinks = obj.useHasActiveParentLinks();
  }
  return hasActiveParentLinks;
}) : (function usePredicate() {
  let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
  if (hasActiveParentLinks) {
    hasActiveParentLinks = obj.useHasActiveParentLinks();
  }
  return hasActiveParentLinks;
});
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function usePredicate() {
    let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
    if (hasActiveParentLinks) {
      hasActiveParentLinks = obj.useHasActiveParentLinks();
    }
    return hasActiveParentLinks;
  }) : (function usePredicate() {
    let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
    if (hasActiveParentLinks) {
      hasActiveParentLinks = obj.useHasActiveParentLinks();
    }
    return hasActiveParentLinks;
  })
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
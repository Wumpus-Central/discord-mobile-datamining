// === Module 15685: ShowDevToolsSetting ===

// Module 15685 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 14648 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14927 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15683 */;
import DevToolsScreens from "DevToolsScreens" /* 15686 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: DevToolsNavigator.navigateToDevTools,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
// === Module 17894: ShowDevToolsSetting ===

// Module 17894 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 16740 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17053 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17892 */;
import DevToolsScreens from "DevToolsScreens" /* 17895 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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
    items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
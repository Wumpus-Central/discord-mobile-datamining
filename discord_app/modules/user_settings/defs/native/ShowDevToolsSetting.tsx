// === Module 15642: ShowDevToolsSetting ===

// Module 15642 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 14634 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14897 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15640 */;
import DevToolsScreens from "DevToolsScreens" /* 15643 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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
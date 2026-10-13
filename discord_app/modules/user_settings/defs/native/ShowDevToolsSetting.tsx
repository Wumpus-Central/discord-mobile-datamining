// === Module 16196: ShowDevToolsSetting ===

// Module 16196 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 15152 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15442 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16194 */;
import DevToolsScreens from "DevToolsScreens" /* 16197 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
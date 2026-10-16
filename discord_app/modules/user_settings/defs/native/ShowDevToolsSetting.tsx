// === Module 16562: ShowDevToolsSetting ===

// Module 16562 (ShowDevToolsSetting)
import DevToolsNavigator from "DevToolsNavigator" /* 15522 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15808 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 16560 */;
import DevToolsScreens from "DevToolsScreens" /* 16563 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
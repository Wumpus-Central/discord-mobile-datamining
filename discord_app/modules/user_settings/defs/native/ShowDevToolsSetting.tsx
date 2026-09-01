// discord_app/modules/user_settings/defs/native/ShowDevToolsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import navigateToDevTools from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import StaffBadgeIcon from "../../../../design/components/Icon/native/redesign/generated/StaffBadgeIcon.tsx";
import DevToolsScreens from "../../../devtools/native/components/DevToolsScreens.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: navigateToDevTools.navigateToDevTools,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [
      ...Object.values(DevToolsScreens.DevToolsScreens),
      ...Object.values(DevToolsScreens.PerformanceTestingScreens),
    ];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true,
});
const obj = {
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: navigateToDevTools.navigateToDevTools,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [
      ...Object.values(DevToolsScreens.DevToolsScreens),
      ...Object.values(DevToolsScreens.PerformanceTestingScreens),
    ];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true,
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;

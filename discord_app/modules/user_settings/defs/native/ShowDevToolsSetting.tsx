// discord_app/modules/user_settings/defs/native/ShowDevToolsSetting.tsx
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import StaffBadgeIcon from "../../../../design/components/Icon/native/redesign/generated/StaffBadgeIcon.tsx";
import DevToolsScreens from "../../../devtools/native/components/DevToolsScreens.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: DevToolsNavigator.navigateToDevTools,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [
      ...Object.values(DevToolsScreens.DevToolsScreens),
      ...Object.values(DevToolsScreens.PerformanceTestingScreens),
    ];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;

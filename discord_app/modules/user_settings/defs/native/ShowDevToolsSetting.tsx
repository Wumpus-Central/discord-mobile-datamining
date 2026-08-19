// === Module 14884: pressable ===

// Module 14884 (pressable)
import obj132 from "obj132" /* 2 */;
import navigateToDevTools from "navigateToDevTools" /* 13946 */;
import DevToolsScreens from "DevToolsScreens" /* 13949 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 14882 */;
import createToggle from "createToggle" /* 10669 */;

const pressable = createToggle.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: navigateToDevTools.navigateToDevTools,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((item, index) => item.headerTitle);
  },
  withArrow: true
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
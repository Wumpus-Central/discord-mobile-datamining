// === Module 15742: ExperimentOverrideActiveSetting ===

// Module 15742 (ExperimentOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14581 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14842 */;
import DevToolsContent from "DevToolsContent" /* 15743 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: fn(15583).BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    let obj = initialize;
    const items = [ExperimentStore];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    obj = { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() };
    return jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    return stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default SettingBuilders;
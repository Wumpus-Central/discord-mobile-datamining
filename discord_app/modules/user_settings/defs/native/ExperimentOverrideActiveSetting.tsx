// === Module 17067: ExperimentOverrideActiveSetting ===

// Module 17067 (ExperimentOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 15700 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16021 */;
import DevToolsContent from "DevToolsContent" /* 17068 */;
import ExperimentStore from "ExperimentStore" /* 5411 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11817);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: fn(16881).BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    const str = stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length);
    return jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    return stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
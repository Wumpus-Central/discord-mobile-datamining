// discord_app/modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import DevToolsContent from "../../../devtools/native/components/DevToolsContent.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";

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
    const stateFromStores = obj.useStateFromStores(
      items,
      () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length,
    );
    const items1 = [ApexExperimentStore];
    obj = {
      label: "Experiments overridden: ",
      value:
        stateFromStores +
        initialize
          .useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length)
          .toString(),
    };
    return jsx(DevToolsContent.DevToolsContentSubLabel, {
      label: "Experiments overridden: ",
      value:
        stateFromStores +
        initialize
          .useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length)
          .toString(),
    });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate =
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(
      items,
      () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length,
    );
    const items1 = [ApexExperimentStore];
    return (
      stateFromStores +
        initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) >
        0 && staffOrDeveloperSettingPredicate
    );
  },
  onPress: function handleExperimentOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default SettingBuilders;

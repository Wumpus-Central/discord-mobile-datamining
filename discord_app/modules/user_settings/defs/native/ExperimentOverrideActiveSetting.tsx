// === Module 15275: pressable ===

// Module 15275 (pressable)
import initialize from "initialize" /* 589 */;
import navigateToDevTools from "navigateToDevTools" /* 14168 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14381 */;
import DevToolsContentSortButtons from "DevToolsContentSortButtons" /* 15276 */;
import closure_2 from "getHash" /* 4359 */;
import closure_3 from "initialize" /* 1212 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: require("BeakerIcon").BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    let obj = initialize;
    const items = [closure_2];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [closure_3];
    const obj2 = initialize;
    obj = { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() };
    return jsx(DevToolsContentSortButtons.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate;
    const items = [closure_2];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = initialize;
    const items1 = [closure_3];
    const obj3 = initialize;
    return stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    navigateToDevTools.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
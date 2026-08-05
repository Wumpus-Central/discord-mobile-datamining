import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { DevToolsContentSortButtons } from "../../../devtools/native/components/DevToolsContent.tsx";
import { navigateToDevTools } from "../../../devtools/native/components/DevToolsNavigator.tsx";
import { useStaffOrDeveloperSettingPredicate } from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
// discord_app/modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx
import getHash from "getHash";
import initialize from "initialize";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: require("BeakerIcon").BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    let obj = initialize /* initialize */;
    const items = [getHash];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [initialize];
    const obj2 = initialize /* initialize */;
    obj = { label: "Experiments overridden: ", value: null };
    obj[1] = stateFromStores + initialize /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString();
    return jsx(DevToolsContentSortButtons /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: null });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate /* useStaffOrDeveloperSettingPredicate */;
    const items = [getHash];
    const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = initialize /* initialize */;
    const items1 = [initialize];
    const obj3 = initialize /* initialize */;
    return stateFromStores + initialize /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    navigateToDevTools /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
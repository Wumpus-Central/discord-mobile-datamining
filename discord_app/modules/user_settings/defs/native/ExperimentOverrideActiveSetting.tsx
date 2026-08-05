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
    let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    const items = [getHash];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [initialize];
    const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    obj = { label: "Experiments overridden: ", value: null };
    obj[1] = stateFromStores + require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString();
    return jsx(require("../../../devtools/native/components/DevToolsContent.tsx") /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: null });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */;
    const items = [getHash];
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    const items1 = [initialize];
    const obj3 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    return stateFromStores + require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    require("../../../devtools/native/components/DevToolsNavigator.tsx") /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
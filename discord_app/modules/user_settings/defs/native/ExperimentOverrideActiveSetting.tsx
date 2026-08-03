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
    let obj = require(589) /* initialize */;
    const items = [getHash];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [initialize];
    const obj2 = require(589) /* initialize */;
    obj = { label: "Experiments overridden: ", value: null };
    obj[1] = stateFromStores + require(589) /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString();
    return jsx(require(13653) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: null });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(13892) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(13892) /* useStaffOrDeveloperSettingPredicate */;
    const items = [getHash];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = require(589) /* initialize */;
    const items1 = [initialize];
    const obj3 = require(589) /* initialize */;
    return stateFromStores + require(589) /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    require(13652) /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
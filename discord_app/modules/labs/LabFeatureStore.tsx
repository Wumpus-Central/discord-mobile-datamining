// === Module 8562: LabFeatureStore ===

// Module 8562 (LabFeatureStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import LabFeatures from "LabFeatures" /* 8563 */;

const LabFeaturesDefault = LabFeatures;

require = fn;
let toggleStates = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class LabFeatureStore extends DeviceSettingsStore {
}
const prototype = LabFeatureStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10008 in LabFeaturesDefault) {
    let labFeatureDefaultValue;
    if (arg0 != null) {
      toggleStates = arg0.toggleStates;
      if (toggleStates != null) {
        labFeatureDefaultValue = toggleStates[key10008];
      }
    }
    if (labFeatureDefaultValue == null) {
      let obj = LabFeatures;
      labFeatureDefaultValue = obj.getLabFeatureDefaultValue(key10008);
    }
    closure_3[key10008] = labFeatureDefaultValue;
    continue;
  }
};
prototype["get"] = function get(key10008) {
  let labFeatureDefaultValue = toggleStates[key10008];
  if (labFeatureDefaultValue == null) {
    labFeatureDefaultValue = LabFeatures.getLabFeatureDefaultValue(key10008);
  }
  return labFeatureDefaultValue;
};
prototype["set"] = function set(arg0, arg1) {
  closure_3[arg0] = arg1;
  return arg1;
};
LabFeatureStore.displayName = "LabFeatureStore";
LabFeatureStore.persistKey = "LabFeatureStore";
const labFeatureStore = new LabFeatureStore(DispatcherDefault, {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_3[labFeature.labFeature] = labFeature.enabled;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;
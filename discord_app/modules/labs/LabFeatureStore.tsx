// === Module 8191: getUserAgnosticState ===

// Module 8191 (getUserAgnosticState)
import { DeviceSettingsStore } from "initialize";

let closure_2 = {};
class LabFeatureStore extends DeviceSettingsStore {
}
const prototype = LabFeatureStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates: closure_2 };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10008 in importDefault(8192)) {
    let tmp = key10008;
    let flag;
    let tmp2 = closure_2;
    if (arg0 != null) {
      toggleStates = arg0.toggleStates;
      if (toggleStates != null) {
        flag = toggleStates[key10008];
      }
    }
    if (flag == null) {
      flag = false;
    }
    tmp2[key10008] = flag;
    continue;
  }
};
prototype["get"] = function get(arg0) {
  let flag = table[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["set"] = function set(arg0, arg1) {
  closure_2[arg0] = arg1;
  return arg1;
};
LabFeatureStore.displayName = "LabFeatureStore";
LabFeatureStore.persistKey = "LabFeatureStore";
const labFeatureStore = new LabFeatureStore(require("dispatcher"), {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_2[labFeature.labFeature] = labFeature.enabled;
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;
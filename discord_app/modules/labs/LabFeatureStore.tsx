// === Module 8555: getUserAgnosticState ===

// Module 8555 (getUserAgnosticState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hide_icymi_tabDefault from "hide_icymi_tab" /* 8556 */;

let closure_2 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class LabFeatureStore extends DeviceSettingsStore {
}
const prototype = LabFeatureStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates: closure_2 };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10008 in hide_icymi_tabDefault) {
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
const labFeatureStore = new LabFeatureStore(dispatcherDefault, {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    closure_2[labFeature.labFeature] = labFeature.enabled;
  }
});
const result = require("set").fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;
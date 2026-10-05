// discord_app/modules/labs/LabFeatureStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LabFeaturesDefault from "LabFeatures.tsx";
import size from "../../../_runtime/metro/00002__.js";

const React2 = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class LabFeatureStore extends DeviceSettingsStore {
  getUserAgnosticState() {
    return { toggleStates };
  }
  initialize(toggleStates) {
    for (const key10008 in LabFeaturesDefault) {
      let flag;
      if (toggleStates != null) {
        toggleStates = toggleStates.toggleStates;
        if (toggleStates != null) {
          flag = toggleStates[key10008];
        }
      }
      if (flag == null) {
        flag = false;
      }
      closure_2[key10008] = flag;
      continue;
    }
  }
  get(arg0) {
    let flag = toggleStates[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  set(arg0, arg1) {
    toggleStates[arg0] = arg1;
    return arg1;
  }
}
const prototype = LabFeatureStore.prototype;
LabFeatureStore.displayName = "LabFeatureStore";
LabFeatureStore.persistKey = "LabFeatureStore";
const obj = {
  LAB_FEATURE_TOGGLE: function handleLabFeatureToggleSet(labFeature) {
    toggleStates[labFeature.labFeature] = labFeature.enabled;
  },
};
const labFeatureStore = new LabFeatureStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/labs/LabFeatureStore.tsx");

export default labFeatureStore;

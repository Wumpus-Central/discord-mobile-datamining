// discord_app/modules/calls/ProportionalVadIndicatorExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = {
  kind: "user",
  name: "2025-12-proportional-vad-indicator",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = {
  1: null,
  2: { enabled: true },
  3: { enabled: true, disableUI: true },
  4: { enabled: true, disableUI: true, swallowVolumeOnlySpeakingEvents: true },
};
obj[4] = { enabled: true, disableUI: true, dontEmitVolumeOnlySpeakingEvents: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/ProportionalVadIndicatorExperiment.tsx");

export default apex_ApexExperimentDefault(obj);

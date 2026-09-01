// discord_app/modules/media_engine/IOSAudioInterruptExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-03-ios-audio-interrupt-handling",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(
  handleConnectionOpen,
) {
  return config.getConfig({ location: handleConnectionOpen });
};

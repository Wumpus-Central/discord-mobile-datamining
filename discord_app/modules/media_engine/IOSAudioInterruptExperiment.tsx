// discord_app/modules/media_engine/IOSAudioInterruptExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-03-ios-audio-interrupt-handling",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(
  handleConnectionOpen,
) {
  const obj = { location: handleConnectionOpen };
  return config.getConfig(obj);
};

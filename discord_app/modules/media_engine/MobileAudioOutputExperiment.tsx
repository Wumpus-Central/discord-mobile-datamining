// discord_app/modules/media_engine/MobileAudioOutputExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-mobile-volume-output-slider-removal",
  kind: "user",
  defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;

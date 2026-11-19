// discord_app/modules/soundboard/experiments/SoundboardMobileCreationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  name: "2026-11-mobile-soundboard-sound-creation",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardMobileCreationExperiment.tsx");

export default apexExperiment;

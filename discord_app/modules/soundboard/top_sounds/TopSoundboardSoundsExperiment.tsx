// discord_app/modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-top-soundboard-sounds",
  defaultConfig: { enabled: false, topSoundsFirst: false },
  variations: null,
};
obj = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj[2] = { enabled: true, topSoundsFirst: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = {
  kind: "user",
  name: "2026-08-top-soundboard-sounds-mobile",
  defaultConfig: { enabled: false, topSoundsFirst: false },
  variations: null,
};
const obj2 = { 1: null, 2: { enabled: true, topSoundsFirst: true } };
obj2[2] = { enabled: true, topSoundsFirst: false };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsExperiment.tsx");

export default apexExperiment;
export const TopSoundboardSoundsExperiment = apexExperiment;
export const TopSoundboardSoundsMobileExperiment = apexExperiment1;

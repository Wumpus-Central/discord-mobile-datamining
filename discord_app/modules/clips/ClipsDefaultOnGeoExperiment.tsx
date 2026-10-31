// discord_app/modules/clips/ClipsDefaultOnGeoExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-clips-default-on-geo",
  defaultConfig: { allowDefaultOn: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { allowDefaultOn: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/ClipsDefaultOnGeoExperiment.tsx");

export default apexExperiment;

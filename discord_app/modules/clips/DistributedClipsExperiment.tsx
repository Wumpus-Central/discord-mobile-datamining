// discord_app/modules/clips/DistributedClipsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-05-distributed-clips",
  defaultConfig: { enableDistributedClips: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enableDistributedClips: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;

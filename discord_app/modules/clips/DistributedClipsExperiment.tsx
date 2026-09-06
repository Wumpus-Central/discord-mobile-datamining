// discord_app/modules/clips/DistributedClipsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-05-distributed-clips",
  defaultConfig: { enableDistributedClips: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enableDistributedClips: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;

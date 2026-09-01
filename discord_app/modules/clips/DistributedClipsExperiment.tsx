// discord_app/modules/clips/DistributedClipsExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-05-distributed-clips",
  defaultConfig: { enableDistributedClips: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;

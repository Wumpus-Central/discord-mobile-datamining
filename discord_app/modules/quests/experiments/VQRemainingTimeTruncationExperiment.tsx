// discord_app/modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-vq-remaining-time-truncation",
  kind: "user",
  defaultConfig: { truncateMoreThanSeconds: null },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;

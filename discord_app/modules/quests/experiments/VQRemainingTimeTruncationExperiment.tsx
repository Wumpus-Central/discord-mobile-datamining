// discord_app/modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-08-vq-remaining-time-truncation",
  kind: "user",
  defaultConfig: { truncateMoreThanSeconds: null },
  variations: null,
};
obj = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj[2] = { truncateMoreThanSeconds: 60 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;

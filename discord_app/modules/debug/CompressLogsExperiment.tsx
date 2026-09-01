// discord_app/modules/debug/CompressLogsExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-08-compress-logs",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/debug/CompressLogsExperiment.tsx");

export default apexExperiment;

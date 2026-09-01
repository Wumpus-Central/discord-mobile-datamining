// discord_app/modules/voice_calls/CallKitMetricCollectionExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-02-callkit-metric-collection",
  kind: "user",
  defaultConfig: { enabled: true },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;

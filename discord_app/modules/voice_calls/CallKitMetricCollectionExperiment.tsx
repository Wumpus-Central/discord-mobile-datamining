// discord_app/modules/voice_calls/CallKitMetricCollectionExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-02-callkit-metric-collection",
  kind: "user",
  defaultConfig: { enabled: true },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;

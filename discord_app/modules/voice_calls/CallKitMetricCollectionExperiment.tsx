// discord_app/modules/voice_calls/CallKitMetricCollectionExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-callkit-metric-collection",
  kind: "user",
  defaultConfig: { enabled: true },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;

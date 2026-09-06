// discord_app/modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { kind: "user", name: "2025-12-zoomed-analytics", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/ZoomedInAnalyticsExperiment.tsx");

export default apexExperiment;
export const isZoomedExperimentEnabled = function isZoomedExperimentEnabled() {
  return apexExperiment.getConfig({ location: "zoomed_in_telemetry_consumer" }).enabled;
};

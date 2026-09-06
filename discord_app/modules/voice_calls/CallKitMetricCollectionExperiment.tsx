// === Module 15490: CallKitMetricCollectionExperiment ===

// Module 15490 (CallKitMetricCollectionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: null };
obj = { 1: null };
obj[1] = { enabled: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
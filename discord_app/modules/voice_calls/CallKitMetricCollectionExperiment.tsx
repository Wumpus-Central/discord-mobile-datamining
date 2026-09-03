// === Module 15332: apexExperiment ===

// Module 15332 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: obj });
const result = set.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
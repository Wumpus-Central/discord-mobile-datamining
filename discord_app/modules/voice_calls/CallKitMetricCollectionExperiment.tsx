// === Module 14798: apexExperiment ===

// Module 14798 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-callkit-metric-collection", kind: "user", defaultConfig: { enabled: true }, variations: obj });
const result = obj132.fileFinishedImporting("modules/voice_calls/CallKitMetricCollectionExperiment.tsx");

export default apexExperiment;
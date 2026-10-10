// === Module 14035: E2eLatencyMeasurementExperiment ===

// Module 14035 (E2eLatencyMeasurementExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-e2e-latency-measurement", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/E2eLatencyMeasurementExperiment.tsx");

export const E2eLatencyMeasurementExperiment = apexExperiment;
// === Module 14012: KrispCpuDisablementExperiment ===

// Module 14012 (KrispCpuDisablementExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-07-krisp-cpu-disablement", defaultConfig: { consecutiveFailures: 1 }, variations: null };
obj = { 1: null, 2: { consecutiveFailures: 3 }, 3: { consecutiveFailures: 5 } };
obj[3] = { consecutiveFailures: 10 };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/KrispCpuDisablementExperiment.tsx");

export const getKrispCpuDisablementConfig = function getKrispCpuDisablementConfig(location) {
  return config.getConfig({ location: location.location });
};
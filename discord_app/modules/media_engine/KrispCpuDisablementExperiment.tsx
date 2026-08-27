// === Module 13414: getKrispCpuDisablementConfig ===

// Module 13414 (getKrispCpuDisablementConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { consecutiveFailures: 3 }, 3: { consecutiveFailures: 5 } };
obj[3] = { consecutiveFailures: 10 };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-krisp-cpu-disablement", defaultConfig: { consecutiveFailures: 1 }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/KrispCpuDisablementExperiment.tsx");

export const getKrispCpuDisablementConfig = function getKrispCpuDisablementConfig(location) {
  return config.getConfig({ location: location.location });
};
// === Module 13845: SystemwideEchoCancellationExperiment ===

// Module 13845 (SystemwideEchoCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { echoReferenceMode: "auto" };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
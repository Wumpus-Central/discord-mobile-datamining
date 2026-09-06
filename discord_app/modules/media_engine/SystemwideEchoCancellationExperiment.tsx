// === Module 14011: SystemwideEchoCancellationExperiment ===

// Module 14011 (SystemwideEchoCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones", defaultConfig: { echoReferenceMode: "mix" }, variations: null };
obj = { 1: null };
obj[1] = { echoReferenceMode: "auto" };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
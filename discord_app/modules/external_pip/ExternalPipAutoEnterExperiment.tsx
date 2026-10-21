// === Module 18270: ExternalPipAutoEnterExperiment ===

// Module 18270 (ExternalPipAutoEnterExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-android-seamless-pip", defaultConfig: { autoEnterEnabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { autoEnterEnabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipAutoEnterExperiment.tsx");

export const isExternalPipAutoEnterEnabled = function isExternalPipAutoEnterEnabled() {
  return config.getConfig({ location: "ExternalPipView" }).autoEnterEnabled;
};
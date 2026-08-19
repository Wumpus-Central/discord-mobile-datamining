// === Module 13180: getMklZenOverrideExperimentConfig ===

// Module 13180 (getMklZenOverrideExperimentConfig)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-mkl-zen-cpu-dispatch-override", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/MklZenOverrideExperiment.tsx");

export const getMklZenOverrideExperimentConfig = function getMklZenOverrideExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};
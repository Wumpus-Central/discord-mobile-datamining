// === Module 7968: useIsExpressiveModalV2Enabled ===

// Module 7968 (useIsExpressiveModalV2Enabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
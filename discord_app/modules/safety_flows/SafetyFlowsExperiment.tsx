// === Module 17507: SafetyFlowsExperiment ===

// Module 17507 (SafetyFlowsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ name: "2026-04-safety-flows", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = function useIsEligibleForSafetyFlowsExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
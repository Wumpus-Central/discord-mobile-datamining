// discord_app/modules/safety_flows/SafetyFlowsExperiment.tsx
import getUnitIdDefault from "../experiments/apex/ApexExperiment.tsx";

const tmp2 = getUnitIdDefault({ name: "2026-04-safety-flows", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("obj132").fileFinishedImporting("modules/safety_flows/SafetyFlowsExperiment.tsx");

export default tmp2;
export const isEligibleForSafetyFlowsExperiment = function isEligibleForSafetyFlowsExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForSafetyFlowsExperiment = function useIsEligibleForSafetyFlowsExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
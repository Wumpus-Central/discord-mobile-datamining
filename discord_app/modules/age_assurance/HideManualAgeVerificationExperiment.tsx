// === Module 7751: useIsManualAgeVerificationHidden ===

// Module 7751 (useIsManualAgeVerificationHidden)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { isHidden: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};
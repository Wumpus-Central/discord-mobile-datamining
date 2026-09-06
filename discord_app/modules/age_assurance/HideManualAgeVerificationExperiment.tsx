// === Module 8578: useIsManualAgeVerificationHidden ===

// Module 8578 (useIsManualAgeVerificationHidden)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { isHidden: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};
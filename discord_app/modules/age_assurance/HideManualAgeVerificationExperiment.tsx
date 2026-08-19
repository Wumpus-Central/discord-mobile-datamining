// discord_app/modules/age_assurance/HideManualAgeVerificationExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { isHidden: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(age_verification_get_started_modal) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};
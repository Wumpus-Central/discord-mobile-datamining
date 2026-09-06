// discord_app/modules/age_assurance/HideManualAgeVerificationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: null };
obj = { 1: null };
obj[1] = { isHidden: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = function useIsManualAgeVerificationHidden(
  age_verification_get_started_modal,
) {
  return closure_0.useConfig({ location: age_verification_get_started_modal }).isHidden;
};
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_0.getConfig({ location }).isHidden;
};

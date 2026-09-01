// discord_app/modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-07-manual-age-assurance-fallback",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(
  isAgeVerificationMessageWithManualReviewCta,
) {
  return config.getConfig({ location: isAgeVerificationMessageWithManualReviewCta }).enabled;
};

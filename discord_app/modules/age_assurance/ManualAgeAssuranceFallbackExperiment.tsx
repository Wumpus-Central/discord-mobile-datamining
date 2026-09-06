// discord_app/modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-07-manual-age-assurance-fallback",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(
  isAgeVerificationMessageWithManualReviewCta,
) {
  return config.getConfig({ location: isAgeVerificationMessageWithManualReviewCta }).enabled;
};

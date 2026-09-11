// === Module 8522: ManualAgeAssuranceFallbackExperiment ===

// Module 8522 (ManualAgeAssuranceFallbackExperiment)
import SafetyHubUtils from "SafetyHubUtils" /* 8504 */;
import SafetyHubStore from "SafetyHubStore" /* 8516 */;

require = fn;
fn(1433);
let ApexExperiment = { kind: "user", name: "2026-07-manual-age-assurance-fallback", defaultConfig: { enabled: false }, variations: null };
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
const config = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ManualAgeAssuranceFallbackExperiment.tsx");

export const isManualAgeAssuranceFallbackEnabled = function isManualAgeAssuranceFallbackEnabled(isAgeVerificationMessageWithManualReviewCta) {
  let obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getIsManualReviewFallbackEnabled();
  } else {
    obj = { location: isAgeVerificationMessageWithManualReviewCta };
    enabled = config.getConfig(obj).enabled;
  }
  return enabled;
};
// === Module 15734: ActivityPrivacyMatchingExperiment ===

// Module 15734 (ActivityPrivacyMatchingExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } });
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(ActivityPrivacyDefaultSharingSetting) {
  const config = closure_0.useConfig({ location: ActivityPrivacyDefaultSharingSetting });
  return true;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  const config = closure_0.getConfig({ location: ActivityPrivacyDefaultSharingSetting });
  return true;
};
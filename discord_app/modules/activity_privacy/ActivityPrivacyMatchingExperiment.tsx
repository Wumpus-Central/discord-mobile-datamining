// === Module 16320: ActivityPrivacyMatchingExperiment ===

// Module 16320 (ActivityPrivacyMatchingExperiment)
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 13482 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } });
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(ActivityPrivacyDefaultSharingSetting) {
  let copyChanges = PrivateProfilesExperiment.useIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj2).copyChanges;
  }
  return copyChanges;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  let upsell = PrivateProfilesExperiment.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    const obj2 = { location: ActivityPrivacyDefaultSharingSetting };
    upsell = closure_2.getConfig(obj2).upsell;
  }
  return upsell;
};
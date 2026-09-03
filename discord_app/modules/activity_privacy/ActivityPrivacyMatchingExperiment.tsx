// === Module 15749: useIsInActivityPrivacyCopyExperiment ===

// Module 15749 (useIsInActivityPrivacyCopyExperiment)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 12745 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-02-activity-privacy-matching", kind: "user", defaultConfig: { copyChanges: false, upsell: false }, variations: { 0: { copyChanges: false, upsell: false }, 1: { copyChanges: true, upsell: false }, 2: { copyChanges: true, upsell: true } } });
const result = set.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = apexExperiment;
  let copyChanges = obj.useIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  obj = { location: ActivityPrivacyDefaultSharingSetting };
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj).copyChanges;
  }
  return copyChanges;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(ActivityPrivacyDefaultSharingSetting) {
  let obj = apexExperiment;
  let upsell = obj.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    obj = { location: null };
    obj[0] = ActivityPrivacyDefaultSharingSetting;
    upsell = closure_2.getConfig(obj).upsell;
  }
  return upsell;
};
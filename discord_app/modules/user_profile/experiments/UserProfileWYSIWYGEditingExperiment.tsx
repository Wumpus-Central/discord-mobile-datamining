// === Module 11484: UserProfileWYSIWYGEditingExperiment ===

// Module 11484 (UserProfileWYSIWYGEditingExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-wysiwyg-user-profile-editing", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileWYSIWYGEditingExperiment.tsx");

export function useIsEligibleForUserProfileWYSIWYGEditing(AutomodQuarantineUtils) {
  return closure_0.useConfig({ location: AutomodQuarantineUtils }).enabled;
}
export function getIsEligibleForUserProfileWYSIWYGEditing(location) {
  return closure_0.getConfig({ location }).enabled;
}
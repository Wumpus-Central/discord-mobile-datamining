// === Module 10852: UserProfileMobileSavePromptExperiment ===

// Module 10852 (UserProfileMobileSavePromptExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-user-profile-mobile-save-prompt", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileSavePromptExperiment.tsx");

export const getIsUserProfileMobileSavePromptEnabled = function getIsUserProfileMobileSavePromptEnabled(location) {
  return config.getConfig({ location }).enabled;
};
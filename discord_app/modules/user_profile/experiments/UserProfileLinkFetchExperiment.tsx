// === Module 7625: UserProfileLinkFetchExperiment ===

// Module 7625 (UserProfileLinkFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-profile-link-fetch", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileLinkFetchExperiment.tsx");

export const getIsUserProfileLinkFetchEnabled = function getIsUserProfileLinkFetchEnabled(showUserProfileActionSheet) {
  return config.getConfig({ location: showUserProfileActionSheet }).enabled;
};
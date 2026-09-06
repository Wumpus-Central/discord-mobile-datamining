// === Module 8180: UserProfileLinkFetchExperiment ===

// Module 8180 (UserProfileLinkFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-profile-link-fetch", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileLinkFetchExperiment.tsx");

export const getIsUserProfileLinkFetchEnabled = function getIsUserProfileLinkFetchEnabled(showUserProfileActionSheet) {
  return config.getConfig({ location: showUserProfileActionSheet }).enabled;
};
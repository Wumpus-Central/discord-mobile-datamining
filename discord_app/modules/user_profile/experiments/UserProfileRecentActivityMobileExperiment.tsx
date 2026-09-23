// === Module 13466: UserProfileRecentActivityMobileExperiment ===

// Module 13466 (UserProfileRecentActivityMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-recent-activity-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileRecentActivityMobileExperiment.tsx");

export const useIsRecentActivityMobileEnabled = function useIsRecentActivityMobileEnabled(UserProfileContent) {
  return closure_0.useConfig({ location: UserProfileContent }).enabled;
};
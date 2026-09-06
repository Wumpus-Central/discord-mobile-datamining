// === Module 9033: UserProfileMobileGameCollectionExperiment ===

// Module 9033 (UserProfileMobileGameCollectionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx");

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(UserProfileWidgetsBoard) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
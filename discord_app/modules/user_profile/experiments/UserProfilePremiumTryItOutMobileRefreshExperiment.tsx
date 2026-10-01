// === Module 14375: UserProfilePremiumTryItOutMobileRefreshExperiment ===

// Module 14375 (UserProfilePremiumTryItOutMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-user-profile-premium-try-it-out-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx");

export const useIsTryItOutMobileRefreshEnabled = function useIsTryItOutMobileRefreshEnabled(GuildProfileEditForm) {
  return closure_0.useConfig({ location: GuildProfileEditForm }).enabled;
};
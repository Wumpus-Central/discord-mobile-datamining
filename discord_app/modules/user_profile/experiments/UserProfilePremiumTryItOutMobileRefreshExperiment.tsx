// === Module 14837: UserProfilePremiumTryItOutMobileRefreshExperiment ===

// Module 14837 (UserProfilePremiumTryItOutMobileRefreshExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-user-profile-premium-try-it-out-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: true, shuffleButtonLocation: "header" } };
obj2[2] = { enabled: true, shuffleButtonLocation: "inline" };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx");

export const useTryItOutMobileRefreshConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useTryItOutMobileRefreshConfig(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2);
}) : (function useTryItOutMobileRefreshConfig(location) {
  return closure_2.useConfig({ location });
});
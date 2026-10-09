// === Module 16612: ServerOnboardingSetupProgressExperiment ===

// Module 16612 (ServerOnboardingSetupProgressExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-server-onboarding-setup-progress", kind: "user", defaultConfig: { showSetupProgressRow: false, boostBeforeAddApp: false }, variations: null };
let obj2 = { 1: null, 2: { showSetupProgressRow: true, boostBeforeAddApp: false } };
obj2[2] = { showSetupProgressRow: true, boostBeforeAddApp: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx");

export const useServerOnboardingSetupProgressExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerOnboardingSetupProgressExperiment(location) {
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
}) : (function useServerOnboardingSetupProgressExperiment(location) {
  return closure_2.useConfig({ location });
});
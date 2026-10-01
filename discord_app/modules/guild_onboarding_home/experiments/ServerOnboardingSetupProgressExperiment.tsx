// === Module 16115: ServerOnboardingSetupProgressExperiment ===

// Module 16115 (ServerOnboardingSetupProgressExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-server-onboarding-setup-progress", kind: "user", defaultConfig: { showSetupProgressRow: false, boostBeforeAddApp: false }, variations: null };
const obj2 = { 1: null, 2: { showSetupProgressRow: true, boostBeforeAddApp: false } };
obj2[2] = { showSetupProgressRow: true, boostBeforeAddApp: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/experiments/ServerOnboardingSetupProgressExperiment.tsx");

export const useServerOnboardingSetupProgressExperiment = function useServerOnboardingSetupProgressExperiment(location) {
  return closure_0.useConfig({ location });
};
// === Module 5130: getNitroFileUploadLimitBytes ===

// Module 5130 (getNitroFileUploadLimitBytes)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: c0, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: closure_1 } = GuildFeatures);
const obj = { 1: null };
obj[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-09-nitro-file-upload-rollout", kind: "user", defaultConfig: { enabled: false }, variations: obj });
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-09-non-nitro-file-upload-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export const getNitroFileUploadLimitBytes = function getNitroFileUploadLimitBytes(location) {
  return store.getConfig({ location: location.location }).enabled ? closure_1 : closure_0;
};
export const getNitroFileUploadRolloutConfig = function getNitroFileUploadRolloutConfig(location) {
  return store.getConfig({ location: location.location });
};
export const useNitroFileUploadRolloutEnabled = function useNitroFileUploadRolloutEnabled(location) {
  return store.useConfig({ location }).enabled;
};
export const getNonNitroFileUploadMarketingConfig = function getNonNitroFileUploadMarketingConfig(location) {
  return closure_3.getConfig({ location: location.location });
};
export const useNonNitroFileUploadMarketingEnabled = function useNonNitroFileUploadMarketingEnabled(location) {
  return closure_3.useConfig({ location }).enabled;
};
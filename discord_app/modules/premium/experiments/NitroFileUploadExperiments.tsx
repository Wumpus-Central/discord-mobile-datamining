// === Module 5130: NitroFileUploadExperiments ===

// Module 5130 (NitroFileUploadExperiments)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: closure_0, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: closure_1 } = PremiumConstants);
let obj = { name: "2026-09-nitro-file-upload-rollout", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_2 = ApexExperiment.createApexExperiment(obj);
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-09-non-nitro-file-upload-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export const getNitroFileUploadLimitBytes = function getNitroFileUploadLimitBytes(location) {
  return closure_2.getConfig({ location: location.location }).enabled ? framebus : React;
};
export const getNitroFileUploadRolloutConfig = function getNitroFileUploadRolloutConfig(location) {
  return closure_2.getConfig({ location: location.location });
};
export const useNitroFileUploadRolloutEnabled = function useNitroFileUploadRolloutEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
};
export const getNonNitroFileUploadMarketingConfig = function getNonNitroFileUploadMarketingConfig(location) {
  return closure_3.getConfig({ location: location.location });
};
export const useNonNitroFileUploadMarketingEnabled = function useNonNitroFileUploadMarketingEnabled(location) {
  return closure_3.useConfig({ location }).enabled;
};
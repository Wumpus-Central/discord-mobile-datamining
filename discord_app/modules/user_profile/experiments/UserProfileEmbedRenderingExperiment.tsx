// === Module 7571: useIsUserProfileEmbedRenderingEnabled ===

// Module 7571 (useIsUserProfileEmbedRenderingEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-profile-embed-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx");

export const useIsUserProfileEmbedRenderingEnabled = function useIsUserProfileEmbedRenderingEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const getIsUserProfileEmbedRenderingEnabled = function getIsUserProfileEmbedRenderingEnabled(MarkupPostProcessors) {
  return closure_0.getConfig({ location: MarkupPostProcessors }).enabled;
};
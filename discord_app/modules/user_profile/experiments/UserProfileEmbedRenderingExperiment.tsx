// === Module 20306: UserProfileEmbedRenderingExperiment ===

// Module 20306 (UserProfileEmbedRenderingExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-profile-embed-rendering", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx");

export function useIsUserProfileEmbedRenderingEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function getIsUserProfileEmbedRenderingEnabled(MessageCodedLinkManager) {
  return closure_0.getConfig({ location: MessageCodedLinkManager }).enabled;
}
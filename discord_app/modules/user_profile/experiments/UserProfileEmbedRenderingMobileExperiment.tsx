// === Module 15583: UserProfileEmbedRenderingMobileExperiment ===

// Module 15583 (UserProfileEmbedRenderingMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-profile-embed-rendering-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx");

export function getIsUserProfileEmbedRenderingMobileEnabled(MessageCodedLinkManager) {
  return config.getConfig({ location: MessageCodedLinkManager }).enabled;
}
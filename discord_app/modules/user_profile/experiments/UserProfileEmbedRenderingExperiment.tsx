// discord_app/modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-profile-embed-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx");

export const useIsUserProfileEmbedRenderingEnabled = function useIsUserProfileEmbedRenderingEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const getIsUserProfileEmbedRenderingEnabled = function getIsUserProfileEmbedRenderingEnabled(MarkupPostProcessors) {
  return closure_0.getConfig({ location: MarkupPostProcessors }).enabled;
};
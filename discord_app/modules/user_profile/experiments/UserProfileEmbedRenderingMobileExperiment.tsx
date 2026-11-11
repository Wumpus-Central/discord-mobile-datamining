// discord_app/modules/user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-11-profile-embed-rendering-mobile",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx",
);

export function getIsUserProfileEmbedRenderingMobileEnabled(MessageCodedLinkManager) {
  return config.getConfig({ location: MessageCodedLinkManager }).enabled;
}

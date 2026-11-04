// discord_app/modules/slayer_storefront/experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-social-layer-storefront-mobile-embed",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx",
);

export const SocialLayerStorefrontMobileEmbedExperiment = apexExperiment;
export function getIsEligibleForSocialLayerStorefrontMobileEmbed(location) {
  let autoTrackExposure = location.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = false;
  }
  return apexExperiment.getConfig({ location: location.location }, { autoTrackExposure }).enabled;
}

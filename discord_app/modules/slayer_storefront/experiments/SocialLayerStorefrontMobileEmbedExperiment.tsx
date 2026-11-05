// === Module 11761: SocialLayerStorefrontMobileEmbedExperiment ===

// Module 11761 (SocialLayerStorefrontMobileEmbedExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-social-layer-storefront-mobile-embed", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobileEmbedExperiment.tsx");

export const SocialLayerStorefrontMobileEmbedExperiment = apexExperiment;
export function getIsEligibleForSocialLayerStorefrontMobileEmbed(location) {
  let autoTrackExposure = location.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = false;
  }
  return apexExperiment.getConfig({ location: location.location }, { autoTrackExposure }).enabled;
}
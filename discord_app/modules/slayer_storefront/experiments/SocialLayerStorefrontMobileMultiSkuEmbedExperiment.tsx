// === Module 11710: SocialLayerStorefrontMobileMultiSkuEmbedExperiment ===

// Module 11710 (SocialLayerStorefrontMobileMultiSkuEmbedExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-social-layer-storefront-mobile-multi-sku-embed", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobileMultiSkuEmbedExperiment.tsx");

export const SocialLayerStorefrontMobileMultiSkuEmbedExperiment = apexExperiment;
export function getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed(location) {
  let autoTrackExposure = location.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = false;
  }
  return apexExperiment.getConfig({ location: location.location }, { autoTrackExposure }).enabled;
}
// === Module 8011: apexExperiment ===

// Module 8011 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-social-layer-storefront-mobile-purchasing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx");

export const SocialLayerStorefrontMobilePurchasingExperiment = apexExperiment;
export const useIsEligibleForSocialLayerStorefrontMobilePurchasing = function useIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getIsEligibleForSocialLayerStorefrontMobilePurchasing = function getIsEligibleForSocialLayerStorefrontMobilePurchasing(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
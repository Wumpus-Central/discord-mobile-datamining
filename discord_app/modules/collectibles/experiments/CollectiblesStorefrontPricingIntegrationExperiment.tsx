// === Module 11107: CollectiblesStorefrontPricingIntegrationExperiment ===

// Module 11107 (CollectiblesStorefrontPricingIntegrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-collectibles-storefront-pricing-integration", kind: "user", defaultConfig: { enabled: false, fetchOnShopButtonPrefetch: false }, variations: { 0: { enabled: false, fetchOnShopButtonPrefetch: false }, 1: { enabled: true, fetchOnShopButtonPrefetch: true }, 2: { enabled: true, fetchOnShopButtonPrefetch: false } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx");

export function getCollectiblesStorefrontPricingFetchOnShopButtonPrefetch(location) {
  return closure_0.getConfig({ location }).fetchOnShopButtonPrefetch;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(c7) {
  return closure_0.useConfig({ location: _location }).enabled;
}
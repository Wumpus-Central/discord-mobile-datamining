// === Module 9448: CollectiblesStorefrontPricingIntegrationExperiment ===

// Module 9448 (CollectiblesStorefrontPricingIntegrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-10-collectibles-storefront-pricing-integration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx");

export function getCollectiblesStorefrontPricingIntegrationEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(c7) {
  return closure_0.useConfig({ location: _location }).enabled;
}
// === Module 9555: FractionalNitroPricingExperiment ===

// Module 9555 (FractionalNitroPricingExperiment)
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1075 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-fractional-nitro-pricing", kind: "user", defaultConfig: null, variations: { 0: null, 1: 2800, 2: 4200 } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/FractionalNitroPricingExperiment.tsx");

export default apexExperiment;
export function isFractionalNitroPricingSku(skuId) {
  return skuId === FractionalPremiumSKUs.FractionalPremiumSKUs.PREMIUM_TIER_2_3_DAY;
}
export function FractionalNitroPricingExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
}
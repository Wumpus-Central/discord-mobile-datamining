// discord_app/modules/collectibles/experiments/FractionalNitroPricingExperiment.tsx
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-10-fractional-nitro-pricing",
  kind: "user",
  defaultConfig: null,
  variations: { 0: null, 1: 2800, 2: 4200 },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/FractionalNitroPricingExperiment.tsx");

export default apexExperiment;
export function isFractionalNitroPricingSku(skuId) {
  return skuId === FractionalPremiumSKUs.FractionalPremiumSKUs.PREMIUM_TIER_2_3_DAY;
}
export function FractionalNitroPricingExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
}

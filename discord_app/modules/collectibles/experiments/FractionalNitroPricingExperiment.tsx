// === Module 9536: FractionalNitroPricingExperiment ===

// Module 9536 (FractionalNitroPricingExperiment)
import c from "c" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1087 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-fractional-nitro-pricing", kind: "user", defaultConfig: null, variations: { 0: null, 1: 2800, 2: 4200 } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/FractionalNitroPricingExperiment.tsx");

export default apexExperiment;
export function isFractionalNitroPricingSku(skuId) {
  return skuId === FractionalPremiumSKUs.FractionalPremiumSKUs.PREMIUM_TIER_2_3_DAY;
}
export const FractionalNitroPricingExposure = ReactCompilerGating.isReactCompilerEnabled() ? (function FractionalNitroPricingExposure(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const config = apexExperiment.useConfig(tmp2);
  return null;
}) : (function FractionalNitroPricingExposure(location) {
  const config = apexExperiment.useConfig({ location: location.location });
  return null;
});
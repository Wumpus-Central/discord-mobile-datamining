// === Module 8826: MobileStickerPickerUpsellRestyleExperiment ===

// Module 8826 (MobileStickerPickerUpsellRestyleExperiment)
import c from "c" /* 576 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-sticker-picker-upsell-restyle", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
function getMobileStickerPickerUpsellRestyleEnabled(location) {
  return apexExperiment.getConfig({ location });
}
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : ((location) => apexExperiment.useConfig({ location }));
export { getMobileStickerPickerUpsellRestyleEnabled };
export const getMobileStickerPickerUpsellRestyleEnabledForFeature = function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
  let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (config) {
    const obj = { location };
    config = apexExperiment.getConfig(obj);
  }
  return config;
};
// discord_app/modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-sticker-picker-upsell-restyle",
  kind: "user",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = function useMobileStickerPickerUpsellRestyleEnabled(
  location,
) {
  return apexExperiment.useConfig({ location });
};
export const getMobileStickerPickerUpsellRestyleEnabled = function getMobileStickerPickerUpsellRestyleEnabled(
  location,
) {
  return apexExperiment.getConfig({ location });
};
export const getMobileStickerPickerUpsellRestyleEnabledForFeature =
  function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
    let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
    if (config) {
      const obj = { location };
      config = apexExperiment.getConfig(obj);
    }
    return config;
  };

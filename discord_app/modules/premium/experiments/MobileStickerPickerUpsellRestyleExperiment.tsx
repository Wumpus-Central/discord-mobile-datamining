// discord_app/modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-sticker-picker-upsell-restyle",
  kind: "user",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
function getMobileStickerPickerUpsellRestyleEnabled(location) {
  return apexExperiment.getConfig({ location });
}
const result = size.fileFinishedImporting("modules/premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx");

export const MobileStickerPickerUpsellRestyleExperiment = apexExperiment;
export const useMobileStickerPickerUpsellRestyleEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMobileStickerPickerUpsellRestyleEnabled(location) {
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
    }
  : function useMobileStickerPickerUpsellRestyleEnabled(location) {
      return apexExperiment.useConfig({ location });
    };
export { getMobileStickerPickerUpsellRestyleEnabled };
export const getMobileStickerPickerUpsellRestyleEnabledForFeature =
  function getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, location) {
    let config = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
    if (config) {
      const obj = { location };
      config = apexExperiment.getConfig(obj);
    }
    return config;
  };

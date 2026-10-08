// discord_app/modules/collectibles/native/FractionalNitroCoinIllustration.tsx
import c from "../../../../_runtime/00576_c.js";
import NitroCoinSpotIllustration from "../../../design/components/mana-assets/native/generated/NitroCoinSpotIllustration.native.tsx";
import NitroCoinStackSpotIllustration2 from "../../../design/components/mana-assets/native/generated/NitroCoinStackSpotIllustration.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const EXTERNAL_PRODUCT_SKU_IDS = fn(1087).EXTERNAL_PRODUCT_SKU_IDS;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = ReactCompilerGating.isReactCompilerEnabled()
  ? function FractionalNitroCoinIllustration(skuId) {
      const cResult = c.c(5);
      ({ width, height, resizeMode } = skuId);
      let str = "contain";
      if (undefined !== resizeMode) {
        str = resizeMode;
      }
      if (skuId.skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
        let NitroCoinStackSpotIllustration = NitroCoinSpotIllustration.NitroCoinSpotIllustration;
      } else {
        NitroCoinStackSpotIllustration = NitroCoinStackSpotIllustration2.NitroCoinStackSpotIllustration;
      }
      if (cResult[0] === NitroCoinStackSpotIllustration) {
        if (cResult[1] === height) {
          if (cResult[2] === str) {
            if (cResult[3] === width) {
              let tmp4 = cResult[4];
            }
            return tmp4;
          }
        }
      }
      const tmp5 = <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={str} />;
      cResult[0] = NitroCoinStackSpotIllustration;
      cResult[1] = height;
      cResult[2] = str;
      cResult[3] = width;
      cResult[4] = tmp5;
      tmp4 = tmp5;
    }
  : function FractionalNitroCoinIllustration(resizeMode) {
      resizeMode = resizeMode.resizeMode;
      ({ skuId, width, height } = resizeMode);
      if (resizeMode === undefined) {
        resizeMode = "contain";
      }
      if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
        let NitroCoinStackSpotIllustration = NitroCoinSpotIllustration.NitroCoinSpotIllustration;
      } else {
        NitroCoinStackSpotIllustration = NitroCoinStackSpotIllustration2.NitroCoinStackSpotIllustration;
      }
      return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
    };

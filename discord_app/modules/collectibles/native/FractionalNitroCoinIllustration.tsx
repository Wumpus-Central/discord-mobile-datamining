// === Module 8307: FractionalNitroCoinIllustration ===

// Module 8307 (FractionalNitroCoinIllustration)
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 8308 */;
import NitroCoinStackSpotIllustration2 from "NitroCoinStackSpotIllustration" /* 8310 */;
import noop from "module_19" /* 19 */;

require = fn;
const EXTERNAL_PRODUCT_SKU_IDS = fn(1076).EXTERNAL_PRODUCT_SKU_IDS;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = function FractionalNitroCoinIllustration(resizeMode) {
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
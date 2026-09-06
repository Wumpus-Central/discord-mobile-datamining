// discord_app/modules/collectibles/native/FractionalNitroCoinIllustration.tsx
import native from "../../../design/assets/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    let NitroCoinStackSpotIllustration = native.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = native.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
};

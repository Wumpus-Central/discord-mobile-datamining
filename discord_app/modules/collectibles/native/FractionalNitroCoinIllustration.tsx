// discord_app/modules/collectibles/native/FractionalNitroCoinIllustration.tsx
import "noop";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import { jsx } from "jsxProd";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = function FractionalNitroCoinIllustration(resizeMode) {
  let height;
  let skuId;
  let width;
  resizeMode = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = AccountAgeTier10LargeBadge.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = AccountAgeTier10LargeBadge.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
};
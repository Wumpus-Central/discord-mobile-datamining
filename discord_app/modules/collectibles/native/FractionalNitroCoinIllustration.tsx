// === Module 9631: FRACTIONAL_NITRO_COIN_SIZE ===

// Module 9631 (FRACTIONAL_NITRO_COIN_SIZE)
import noopAll from "noop" /* 19 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6202 */;
import { EXTERNAL_PRODUCT_SKU_IDS } from "items" /* 678 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = function FractionalNitroCoinIllustration(resizeMode) {
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
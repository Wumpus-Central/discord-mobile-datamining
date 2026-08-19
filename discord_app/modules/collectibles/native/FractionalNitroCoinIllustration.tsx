// discord_app/modules/collectibles/native/FractionalNitroCoinIllustration.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import AccountAgeTier10LargeBadge from "../../../design/assets/native.tsx";
import { EXTERNAL_PRODUCT_SKU_IDS } from "../CollectiblesShopConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

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
// === Module 10305: usePremiumProductPricingString ===

// Module 10305 (usePremiumProductPricingString)
import closure_2 from "updateProduct" /* 5319 */;
import { PRICE_PLACEHOLDER } from "GuildFeatures" /* 1924 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(4039).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(4039);
  _require = _require(5322).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5322);
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
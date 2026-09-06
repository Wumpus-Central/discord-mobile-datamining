// === Module 10751: usePremiumProductPricingString ===

// Module 10751 (usePremiumProductPricingString)
import closure_2 from "updateProduct" /* 7237 */;
import { PRICE_PLACEHOLDER } from "GuildFeatures" /* 1373 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, YEAR) {
  const planIdForPremiumType = _require(4218).getPlanIdForPremiumType(closure_0, YEAR);
  const obj = _require(4218);
  _require = _require(7240).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(7240);
  const items = [closure_2];
  const stateFromStores = _require(504).useStateFromStores(items, () => closure_1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
// === Module 10262: usePremiumProductPricingString ===

// Module 10262 (usePremiumProductPricingString)
import closure_2 from "updateProduct" /* 6031 */;
import { PRICE_PLACEHOLDER } from "GuildFeatures" /* 1924 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, YEAR) {
  const planIdForPremiumType = _require(4107).getPlanIdForPremiumType(closure_0, YEAR);
  const obj = _require(4107);
  _require = _require(6034).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(6034);
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
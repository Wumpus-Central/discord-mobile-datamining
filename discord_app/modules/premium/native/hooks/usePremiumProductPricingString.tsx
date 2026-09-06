// === Module 10751: usePremiumProductPricingString ===

// Module 10751 (usePremiumProductPricingString)
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
const PRICE_PLACEHOLDER = fn(1373).PRICE_PLACEHOLDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  const planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, YEAR);
  const obj = require("PremiumUtils");
  _require = require("ProductIds").getProductIdForGift(planIdForPremiumType);
  const obj2 = require("ProductIds");
  const items = [IAPStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => IAPStore.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
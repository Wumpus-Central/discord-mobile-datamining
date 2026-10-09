// === Module 10078: usePremiumProductPricingString ===

// Module 10078 (usePremiumProductPricingString)
import IAPStore from "IAPStore" /* 7125 */;

const require = globalThis.__r;

const require = fn;
const PRICE_PLACEHOLDER = fn(1392).PRICE_PLACEHOLDER;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumProductPricingString(premiumType, c3) {
  const cResult = require("c").c(6);
  if (cResult[0] === c3) {
    if (cResult[1] === premiumType) {
      let tmp4 = cResult[2];
    }
    _require = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [IAPStore];
      cResult[3] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const fn = function f() {
        return IAPStore.getProduct(closure_0);
      };
      cResult[4] = tmp4;
      cResult[5] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp8, tmp10);
    let priceString;
    if (stateFromStores != null) {
      priceString = stateFromStores.priceString;
    }
    if (priceString == null) {
      priceString = PRICE_PLACEHOLDER;
    }
    return priceString;
  }
  const obj = require("c");
  const planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, c3);
  const tmpResult3 = require("PremiumUtils");
  const productIdForGift = require("ProductIds").getProductIdForGift(planIdForPremiumType);
  cResult[0] = c3;
  cResult[1] = premiumType;
  cResult[2] = productIdForGift;
  tmp4 = productIdForGift;
  const tmpResult4 = require("ProductIds");
}) : (function usePremiumProductPricingString(premiumType, c3) {
  const planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, c3);
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
});
// === Module 10483: usePremiumProductPricingString ===

// Module 10483 (usePremiumProductPricingString)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import IAPStore from "IAPStore" /* 6739 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PRICE_PLACEHOLDER = PremiumConstants.PRICE_PLACEHOLDER;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType, c3) => {
  let closure_0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === c3) {
    let tmp4;
    let tmp8;
    let tmp10;
    if (cResult[1] === premiumType) {
      tmp4 = cResult[2];
    }
    _require = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [IAPStore];
      cResult[3] = items;
      tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const fn = function f() {
        return IAPStore.getProduct(closure_0);
      };
      cResult[4] = tmp4;
      cResult[5] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
    let priceString;
    if (stateFromStores != null) {
      priceString = stateFromStores.priceString;
    }
    if (priceString == null) {
      priceString = PRICE_PLACEHOLDER;
    }
    return priceString;
  }
  const tmpResult3 = require("PremiumUtils");
  const planIdForPremiumType = tmpResult3.getPlanIdForPremiumType(premiumType, c3);
  const tmpResult4 = require("ProductIds");
  const productIdForGift = tmpResult4.getProductIdForGift(planIdForPremiumType);
  cResult[0] = c3;
  cResult[1] = premiumType;
  cResult[2] = productIdForGift;
  tmp4 = productIdForGift;
}) : ((premiumType, c3) => {
  let closure_0;
  const obj = require("PremiumUtils");
  const planIdForPremiumType = obj.getPlanIdForPremiumType(premiumType, c3);
  const obj2 = require("ProductIds");
  _require = obj2.getProductIdForGift(planIdForPremiumType);
  const items = [IAPStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => IAPStore.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default tmp2;
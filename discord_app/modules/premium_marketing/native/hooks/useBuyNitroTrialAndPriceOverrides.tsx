// === Module 12951: set ===

// Module 12951 (set)
import keys from "keys" /* 644 */;
import set from "set" /* 2 */;

let obj = { trialUnavailableTiers: null, orderPriceOverrides: null };
let set = new Set();
obj[0] = set;
obj[1] = new Map();
let closure_1 = keys.create(() => obj);
const result = set.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroTrialAndPriceOverrides.tsx");

export const useBuyNitroTrialUnavailableTiers = function useBuyNitroTrialUnavailableTiers() {
  return store((trialUnavailableTiers) => trialUnavailableTiers.trialUnavailableTiers);
};
export const useBuyNitroOrderPriceOverrides = function useBuyNitroOrderPriceOverrides() {
  return store((orderPriceOverrides) => orderPriceOverrides.orderPriceOverrides);
};
export const markBuyNitroTrialUnavailable = function markBuyNitroTrialUnavailable(premiumTier) {
  obj = store;
  const trialUnavailableTiers = store.getState().trialUnavailableTiers;
  if (!trialUnavailableTiers.has(premiumTier)) {
    obj = { trialUnavailableTiers: null };
    const _Set = Set;
    const set = new Set(trialUnavailableTiers);
    obj[0] = set.add(premiumTier);
    obj.setState(obj);
  }
};
export const applyBuyNitroOrderPriceOverride = function applyBuyNitroOrderPriceOverride(productId, arg1) {
  obj = store;
  const orderPriceOverrides = store.getState().orderPriceOverrides;
  if (orderPriceOverrides.get(productId) !== arg1) {
    obj = { orderPriceOverrides: null };
    const _Map = Map;
    const map = new Map(orderPriceOverrides);
    obj[0] = map.set(productId, arg1);
    obj.setState(obj);
  }
};
export const resetBuyNitroTrialAndPriceOverrides = function resetBuyNitroTrialAndPriceOverrides() {
  store.setState(obj);
};
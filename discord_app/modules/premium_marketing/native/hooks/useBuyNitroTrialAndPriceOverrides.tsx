// discord_app/modules/premium_marketing/native/hooks/useBuyNitroTrialAndPriceOverrides.tsx
import 00560__ from "../../../../../_runtime/metro/00560__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { trialUnavailableTiers: new Set(), orderPriceOverrides: null };
let set = new Set();
obj.orderPriceOverrides = new Map();
let closure_1 = module_560.create(() => obj);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroTrialAndPriceOverrides.tsx");

export const useBuyNitroTrialUnavailableTiers = function useBuyNitroTrialUnavailableTiers() {
  return closure_1((trialUnavailableTiers) => trialUnavailableTiers.trialUnavailableTiers);
};
export const useBuyNitroOrderPriceOverrides = function useBuyNitroOrderPriceOverrides() {
  return closure_1((orderPriceOverrides) => orderPriceOverrides.orderPriceOverrides);
};
export const markBuyNitroTrialUnavailable = function markBuyNitroTrialUnavailable(premiumTier) {
  obj = closure_1;
  const trialUnavailableTiers = closure_1.getState().trialUnavailableTiers;
  if (!trialUnavailableTiers.has(premiumTier)) {
    obj = { trialUnavailableTiers: null };
    const _Set = Set;
    const set = new Set(trialUnavailableTiers);
    obj.trialUnavailableTiers = set.add(premiumTier);
    obj.setState(obj);
  }
};
export const applyBuyNitroOrderPriceOverride = function applyBuyNitroOrderPriceOverride(productId, arg1) {
  obj = closure_1;
  const orderPriceOverrides = closure_1.getState().orderPriceOverrides;
  if (orderPriceOverrides.get(productId) !== arg1) {
    obj = { orderPriceOverrides: null };
    const _Map = Map;
    const map = new Map(orderPriceOverrides);
    obj.orderPriceOverrides = map.set(productId, arg1);
    obj.setState(obj);
  }
};
export const resetBuyNitroTrialAndPriceOverrides = function resetBuyNitroTrialAndPriceOverrides() {
  closure_1.setState(obj);
};
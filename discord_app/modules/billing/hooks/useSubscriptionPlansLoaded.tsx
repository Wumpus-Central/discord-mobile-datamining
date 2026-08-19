// discord_app/modules/billing/hooks/useSubscriptionPlansLoaded.tsx
import timestampDefault from "../../debug/Logger.tsx";
import handlePaymentSourceUpdate from "../../../stores/billing/PaymentSourceStore.tsx";
import addSubscriptionPlan from "../../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../../stores/billing/SubscriptionStore.tsx";
import { ACTIVE_PREMIUM_SKUS } from "../../premium/PremiumConstants.tsx";

const require = fn;
function getSubscriptionPlansLoaded(items, items2) {
  let tmp = items;
  if (items === undefined) {
    items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  let tmp5 = items2;
  if (items2 === undefined) {
    const items1 = [closure_2, closure_3, closure_4];
    tmp5 = items1;
  }
  [tmp9, obj, obj2] = tmp5;
  ({ paymentSourceIds, defaultPaymentSourceId } = tmp9);
  const premiumTypeSubscription = obj2.getPremiumTypeSubscription();
  let paymentSourceId;
  if (premiumTypeSubscription != null) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  if (null != paymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(paymentSourceId, tmp)) {
      return false;
    }
  }
  if (null != defaultPaymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(defaultPaymentSourceId, tmp)) {
      return false;
    }
  }
  for (const item10046 of paymentSourceIds) {
    if (obj.hasPaymentSourceForSKUIds(item10046, tmp)) {
      continue;
    } else {
      obj3.return();
      let flag3 = false;
      return false;
    }
  }
  return obj.isLoadedForSKUs(tmp);
}
new timestampDefault("useSubscriptionPlansLoaded");
const result = require("obj132").fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let tmp = arg0;
  if (arg0 === undefined) {
    let items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  items = tmp;
  const items1 = [closure_2, closure_3, closure_4];
  const items2 = [tmp];
  return items(589).useStateFromStores(items1, () => {
    items = [closure_1_2, closure_1_3, closure_1_4];
    return getSubscriptionPlansLoaded(items, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
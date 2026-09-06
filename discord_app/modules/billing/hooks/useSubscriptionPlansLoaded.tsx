// === Module 13417: useSubscriptionPlansLoaded ===

// Module 13417 (useSubscriptionPlansLoaded)
import LoggerDefault from "Logger" /* 3 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4221 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

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
    const items1 = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
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
const ACTIVE_PREMIUM_SKUS = fn(1373).ACTIVE_PREMIUM_SKUS;
new LoggerDefault("useSubscriptionPlansLoaded");
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let tmp = arg0;
  if (arg0 === undefined) {
    let items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  items = tmp;
  const items1 = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
  const items2 = [tmp];
  return items(504).useStateFromStores(items1, () => {
    items = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
    return getSubscriptionPlansLoaded(items, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
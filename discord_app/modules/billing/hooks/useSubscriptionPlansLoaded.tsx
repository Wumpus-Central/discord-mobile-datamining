// === Module 13205: useSubscriptionPlansLoaded ===

// Module 13205 (useSubscriptionPlansLoaded)
import LoggerDefault from "Logger" /* 3 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4531 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4533 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import size from "module_2" /* 2 */;

function getSubscriptionPlansLoaded() {
  let defaultPaymentSourceId;
  let items;
  let obj;
  let obj2;
  let paymentSourceIds;
  let tmp10;
  let tmp2 = items;
  if (items === undefined) {
    items = [];
    HermesBuiltin.arraySpread(items, ACTIVE_PREMIUM_SKUS, 0);
    tmp2 = items;
  }
  let tmp6 = items2;
  if (items2 === undefined) {
    const items1 = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
    tmp6 = items1;
  }
  [tmp10, obj, obj2] = tmp6;
  ({ paymentSourceIds, defaultPaymentSourceId } = tmp10);
  const isLoadedForSKUsResult = obj.isLoadedForSKUs(tmp2);
  const premiumTypeSubscription = obj2.getPremiumTypeSubscription();
  let paymentSourceId;
  if (premiumTypeSubscription != null) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  if (null != paymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(paymentSourceId, tmp2)) {
      return false;
    }
  }
  if (null != defaultPaymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(defaultPaymentSourceId, tmp2)) {
      return false;
    }
  }
  for (const item10046 of paymentSourceIds) {
    if (obj.hasPaymentSourceForSKUIds(item10046, tmp2)) {
      continue;
    } else {
      obj3.return();
      let flag3 = false;
      return false;
    }
  }
  return isLoadedForSKUsResult;
}
const ACTIVE_PREMIUM_SKUS = PremiumConstants.ACTIVE_PREMIUM_SKUS;
let tmp2 = new LoggerDefault("useSubscriptionPlansLoaded");
const result = size.fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let items;
  let tmp2 = arg0;
  if (arg0 === undefined) {
    items = [];
    HermesBuiltin.arraySpread(items, ACTIVE_PREMIUM_SKUS, 0);
    tmp2 = items;
  }
  items = tmp2;
  const items1 = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
  const items2 = [tmp2];
  const obj = items(504);
  return obj.useStateFromStores(items1, () => {
    items = [PaymentSourceStore, SubscriptionPlanStore, SubscriptionStore];
    return getSubscriptionPlansLoaded(items, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
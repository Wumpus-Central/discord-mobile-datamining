// === Module 12853: getSubscriptionPlansLoaded ===

// Module 12853 (getSubscriptionPlansLoaded)
import timestampDefault from "timestamp" /* 3 */;
import handlePaymentSourceUpdate from "handlePaymentSourceUpdate" /* 4042 */;
import addSubscriptionPlan from "addSubscriptionPlan" /* 4044 */;
import reset from "reset" /* 4045 */;
import { ACTIVE_PREMIUM_SKUS } from "GuildFeatures" /* 1924 */;

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
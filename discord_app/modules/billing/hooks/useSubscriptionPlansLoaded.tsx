// discord_app/modules/billing/hooks/useSubscriptionPlansLoaded.tsx
import handlePaymentSourceUpdate from "handlePaymentSourceUpdate";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import { ACTIVE_PREMIUM_SKUS } from "GuildFeatures";

let require = arg1;
function getSubscriptionPlansLoaded(items) {
  let defaultPaymentSourceId;
  let obj;
  let obj2;
  let paymentSourceIds;
  let tmp9;
  let tmp = items;
  if (items === undefined) {
    items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  let tmp5 = arg1;
  if (arg1 === undefined) {
    const items1 = [handlePaymentSourceUpdate, addSubscriptionPlan, reset];
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
      let tmp13 = obj3;
      obj3.return();
      let flag3 = false;
      return false;
    }
  }
  return obj.isLoadedForSKUs(tmp);
}
new require("GuildFeatures")("useSubscriptionPlansLoaded");
const result = require("reset").fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let tmp = arg0;
  if (arg0 === undefined) {
    let items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  const require = tmp;
  const items1 = [handlePaymentSourceUpdate, addSubscriptionPlan, reset];
  const items2 = [tmp];
  return require(589) /* initialize */.useStateFromStores(items1, () => {
    const items = [outer1_2, outer1_3, outer1_4];
    return outer1_6(closure_0, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
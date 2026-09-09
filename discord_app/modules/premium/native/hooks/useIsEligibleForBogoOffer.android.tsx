// === Module 10739: useIsEligibleForBogoOffer ===

// Module 10739 (useIsEligibleForBogoOffer)
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4237 */;
import PromotionsStore from "PromotionsStore" /* 10697 */;

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [PromotionsStore];
  const stateFromStores = forceUpdate(504).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = forceUpdate(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = forceUpdate(504).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = forceUpdate(504);
  const premiumTrialOffer = forceUpdate(7461).usePremiumTrialOffer();
  const obj4 = forceUpdate(7461);
  const premiumDiscountOffer = forceUpdate(10738).usePremiumDiscountOffer();
  const obj5 = forceUpdate(10738);
  const isPaymentsBlocked = forceUpdate(7431).useIsPaymentsBlocked();
  const obj6 = forceUpdate(7431);
  forceUpdate = forceUpdate(7454).useForceUpdate();
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = noop.useEffect(() => {
    if (null != valueOfResult) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(forceUpdate, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items2);
  let tmp8 = null != stateFromStores && !isPaymentsBlocked;
  if (tmp8) {
    let tmp9 = null == premiumTrialOffer && null == premiumDiscountOffer;
    if (tmp9) {
      let hasPremiumAtLeastResult;
      if (stateFromStores1 != null) {
        hasPremiumAtLeastResult = stateFromStores1.hasPremiumAtLeast(PremiumTypes.TIER_2);
      }
      tmp9 = true !== hasPremiumAtLeastResult;
    }
    tmp8 = tmp9;
  }
  return tmp8;
};
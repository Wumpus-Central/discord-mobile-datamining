// discord_app/modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [PromotionsStore];
  const stateFromStores = forceUpdate(504).useStateFromStores(items, () =>
    activeBogoRewardPromotion.getActiveBogoRewardPromotion(),
  );
  const obj = forceUpdate(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = forceUpdate(504).useStateFromStores(items1, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  const obj2 = forceUpdate(504);
  const premiumTrialOffer = forceUpdate(7447).usePremiumTrialOffer();
  const obj4 = forceUpdate(7447);
  const premiumDiscountOffer = forceUpdate(10706).usePremiumDiscountOffer();
  const obj5 = forceUpdate(10706);
  const isPaymentsBlocked = forceUpdate(7417).useIsPaymentsBlocked();
  const obj6 = forceUpdate(7417);
  forceUpdate = forceUpdate(7440).useForceUpdate();
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

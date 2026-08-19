// discord_app/modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import createEmptyPromotionsByType from "../../promotions/PromotionsStore.tsx";
import { PremiumTypes } from "../../PremiumConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [closure_4];
  const stateFromStores = forceUpdate(589).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = forceUpdate(589);
  const items1 = [closure_3];
  const stateFromStores1 = forceUpdate(589).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = forceUpdate(589);
  const premiumTrialOffer = forceUpdate(7418).usePremiumTrialOffer();
  const obj4 = forceUpdate(7418);
  const premiumDiscountOffer = forceUpdate(7624).usePremiumDiscountOffer();
  const obj5 = forceUpdate(7624);
  const isPaymentsBlocked = forceUpdate(7388).useIsPaymentsBlocked();
  const obj6 = forceUpdate(7388);
  forceUpdate = forceUpdate(7411).useForceUpdate();
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = React.useEffect(() => {
    if (null != closure_1) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(timeout, diff);
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
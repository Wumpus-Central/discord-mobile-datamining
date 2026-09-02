// === Module 10705: useIsEligibleForBogoOffer ===

// Module 10705 (useIsEligibleForBogoOffer)
import closure_2 from "noop" /* 19 */;
import closure_3 from "reset" /* 4145 */;
import closure_4 from "createEmptyPromotionsByType" /* 10696 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [closure_4];
  const stateFromStores = forceUpdate(586).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = forceUpdate(586);
  const items1 = [closure_3];
  const stateFromStores1 = forceUpdate(586).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = forceUpdate(586);
  const premiumTrialOffer = forceUpdate(7201).usePremiumTrialOffer();
  const obj4 = forceUpdate(7201);
  const premiumDiscountOffer = forceUpdate(10704).usePremiumDiscountOffer();
  const obj5 = forceUpdate(10704);
  const isPaymentsBlocked = forceUpdate(7171).useIsPaymentsBlocked();
  const obj6 = forceUpdate(7171);
  forceUpdate = forceUpdate(7194).useForceUpdate();
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
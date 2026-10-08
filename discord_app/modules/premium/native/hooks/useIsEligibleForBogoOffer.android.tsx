// discord_app/modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

const require = fn;
const PremiumTypes = fn(1391).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsEligibleForBogoOffer() {
      const cResult = forceUpdate(576).c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PromotionsStore];
        const fn = function n() {
          return activeBogoRewardPromotion.getActiveBogoRewardPromotion();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = forceUpdate(576);
      const stateFromStores = forceUpdate(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        const fn2 = function v() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = forceUpdate(504);
      const stateFromStores1 = forceUpdate(504).useStateFromStores(tmp8, tmp9);
      const tmpResult6 = forceUpdate(504);
      const premiumTrialOffer = forceUpdate(7158).usePremiumTrialOffer();
      const tmpResult7 = forceUpdate(7158);
      const premiumDiscountOffer = forceUpdate(10048).usePremiumDiscountOffer();
      const tmpResult8 = forceUpdate(10048);
      const isPaymentsBlocked = forceUpdate(7125).useIsPaymentsBlocked();
      const tmpResult9 = forceUpdate(7125);
      forceUpdate = forceUpdate(7151).useForceUpdate();
      if (cResult[4] !== stateFromStores) {
        let valueOfResult = null;
        if (null != stateFromStores) {
          const endDate = stateFromStores.endDate;
          valueOfResult = endDate.valueOf();
        }
        cResult[4] = stateFromStores;
        cResult[5] = valueOfResult;
        let tmp15 = valueOfResult;
      } else {
        tmp15 = cResult[5];
      }
      dependencyMap = tmp15;
      if (cResult[6] === tmp15) {
        if (cResult[7] === forceUpdate) {
          let tmp17 = cResult[8];
          let tmp18 = cResult[9];
        }
        const effect = noop.useEffect(tmp17, tmp18);
        let flag = null;
        let tmp21 = null != stateFromStores && !isPaymentsBlocked;
        if (tmp21) {
          if (!(flag == premiumTrialOffer && flag == premiumDiscountOffer)) {
            tmp21 = tmp22;
          } else {
            if (cResult[10] !== stateFromStores1) {
              let hasPremiumAtLeastResult;
              if (stateFromStores1 != flag) {
                hasPremiumAtLeastResult = stateFromStores1.hasPremiumAtLeast(PremiumTypes.TIER_2);
              }
              cResult[10] = stateFromStores1;
              cResult[11] = hasPremiumAtLeastResult;
            }
            flag = true;
          }
        }
        return tmp21;
      }
      const fn3 = function _() {
        if (null != closure_1) {
          const _Date = Date;
          const diff = tmp - Date.now();
          if (diff > 0) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(forceUpdate, diff);
            return () => clearTimeout(closure_0);
          }
        }
      };
      const items2 = [tmp15, forceUpdate];
      cResult[6] = tmp15;
      cResult[7] = forceUpdate;
      cResult[8] = fn3;
      cResult[9] = items2;
      tmp18 = items2;
      tmp17 = fn3;
      const tmpResult10 = forceUpdate(7151);
    }
  : function useIsEligibleForBogoOffer() {
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
      const premiumTrialOffer = forceUpdate(7158).usePremiumTrialOffer();
      const obj4 = forceUpdate(7158);
      const premiumDiscountOffer = forceUpdate(10048).usePremiumDiscountOffer();
      const obj5 = forceUpdate(10048);
      const isPaymentsBlocked = forceUpdate(7125).useIsPaymentsBlocked();
      const obj6 = forceUpdate(7125);
      forceUpdate = forceUpdate(7151).useForceUpdate();
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

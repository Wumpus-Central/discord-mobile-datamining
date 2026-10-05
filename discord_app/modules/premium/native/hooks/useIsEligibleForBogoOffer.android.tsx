// discord_app/modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let activeBogoRewardPromotion;
      let closure_1;
      let forceUpdate;
      let premiumTypeSubscription;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const tmp = forceUpdate;
      const obj = forceUpdate(576);
      const cResult = obj.c(12);
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
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        const fn2 = function v() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult6 = tmp(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp8, tmp9);
      const tmpResult7 = tmp(6956);
      const premiumTrialOffer = tmpResult7.usePremiumTrialOffer();
      const tmpResult8 = tmp(10438);
      const premiumDiscountOffer = tmpResult8.usePremiumDiscountOffer();
      const tmpResult9 = tmp(6923);
      const isPaymentsBlocked = tmpResult9.useIsPaymentsBlocked();
      const tmpResult10 = tmp(6949);
      forceUpdate = tmpResult10.useForceUpdate();
      if (cResult[4] !== stateFromStores) {
        let valueOfResult = null;
        if (null != stateFromStores) {
          const endDate = stateFromStores.endDate;
          valueOfResult = endDate.valueOf();
        }
        cResult[4] = stateFromStores;
        cResult[5] = valueOfResult;
        tmp15 = valueOfResult;
      } else {
        tmp15 = cResult[5];
      }
      dependencyMap = tmp15;
      if (cResult[6] === tmp15) {
        let tmp17;
        let tmp18;
        if (cResult[7] === forceUpdate) {
          tmp17 = cResult[8];
          tmp18 = cResult[9];
        }
        const effect = react.useEffect(tmp17, tmp18);
        let tmp22 = null != stateFromStores && !isPaymentsBlocked;
        if (tmp22) {
          let tmp23 = null == premiumTrialOffer && null == premiumDiscountOffer;
          if (tmp23) {
            let tmp24;
            if (cResult[10] !== stateFromStores1) {
              let hasPremiumAtLeastResult;
              if (stateFromStores1 != null) {
                hasPremiumAtLeastResult = stateFromStores1.hasPremiumAtLeast(PremiumTypes.TIER_2);
              }
              cResult[10] = stateFromStores1;
              cResult[11] = hasPremiumAtLeastResult;
              tmp24 = hasPremiumAtLeastResult;
            } else {
              tmp24 = cResult[11];
            }
            tmp23 = true !== tmp24;
          }
          tmp22 = tmp23;
        }
        return tmp22;
      }
      const fn3 = function b() {
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
    }
  : () => {
      let activeBogoRewardPromotion;
      let forceUpdate;
      let premiumTypeSubscription;
      const items = [PromotionsStore];
      const obj = forceUpdate(504);
      const stateFromStores = obj.useStateFromStores(items, () =>
        activeBogoRewardPromotion.getActiveBogoRewardPromotion(),
      );
      const items1 = [SubscriptionStore];
      const obj2 = forceUpdate(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      const obj4 = forceUpdate(6956);
      const premiumTrialOffer = obj4.usePremiumTrialOffer();
      const obj5 = forceUpdate(10438);
      const premiumDiscountOffer = obj5.usePremiumDiscountOffer();
      const obj6 = forceUpdate(6923);
      const isPaymentsBlocked = obj6.useIsPaymentsBlocked();
      const obj7 = forceUpdate(6949);
      forceUpdate = obj7.useForceUpdate();
      let valueOfResult = null;
      if (null != stateFromStores) {
        const endDate = stateFromStores.endDate;
        valueOfResult = endDate.valueOf();
      }
      dependencyMap = valueOfResult;
      const items2 = [valueOfResult, forceUpdate];
      const effect = react.useEffect(() => {
        if (null != dependencyMap) {
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
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = tmp2;

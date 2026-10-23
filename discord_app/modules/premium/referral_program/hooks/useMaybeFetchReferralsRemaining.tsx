// discord_app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaybeFetchReferralsRemaining(arg0) {
      const cResult = require("c").c(10);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      const tmpResult = require("initialize");
      const hasDiscountApplied = require("PremiumSubscriptionOfferUtil").useHasDiscountApplied();
      const tmpResult3 = require("PremiumSubscriptionOfferUtil");
      const hasActiveTrial = require("PremiumSubscriptionTrialUtil").useHasActiveTrial();
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === hasActiveTrial) {
          if (cResult[4] === hasDiscountApplied) {
            let tmp10 = cResult[5];
          }
          dependencyMap = tmp10;
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp10) {
              let tmp13 = cResult[8];
              let tmp14 = cResult[9];
            }
            const effect = noop.useEffect(tmp13, tmp14);
          }
          const fn2 = function b() {
            let tmp = closure_1;
            if (closure_1) {
              tmp = !closure_0;
            }
            if (tmp) {
              const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
            }
          };
          const items1 = [tmp10, tmp4];
          cResult[6] = tmp4;
          cResult[7] = tmp10;
          cResult[8] = fn2;
          cResult[9] = items1;
          tmp14 = items1;
          tmp13 = fn2;
        }
      }
      let verified;
      if (stateFromStores != null) {
        verified = stateFromStores.verified;
      }
      const tmp12 =
        true === verified && stateFromStores.hasPaidTier2Subscription() && !hasDiscountApplied && !hasActiveTrial;
      cResult[2] = stateFromStores;
      cResult[3] = hasActiveTrial;
      cResult[4] = hasDiscountApplied;
      cResult[5] = tmp12;
      tmp10 = tmp12;
      const tmpResult4 = require("PremiumSubscriptionTrialUtil");
    }
  : function useMaybeFetchReferralsRemaining() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      dependencyMap = undefined;
      const items = [UserStore];
      const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = flag(504);
      const hasDiscountApplied = flag(8427).useHasDiscountApplied();
      const obj3 = flag(8427);
      let verified;
      const hasActiveTrial = flag(8428).useHasActiveTrial();
      if (stateFromStores != null) {
        verified = stateFromStores.verified;
      }
      const tmp4 =
        true === verified && stateFromStores.hasPaidTier2Subscription() && !hasDiscountApplied && !hasActiveTrial;
      dependencyMap = tmp4;
      const items1 = [tmp4, flag];
      const effect = noop.useEffect(() => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = !flag;
        }
        if (tmp) {
          const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
        }
      }, items1);
    };

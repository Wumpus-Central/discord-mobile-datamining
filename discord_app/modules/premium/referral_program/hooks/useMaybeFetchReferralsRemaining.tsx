// === Module 8068: useMaybeFetchReferralsRemaining ===

// Module 8068 (useMaybeFetchReferralsRemaining)
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7102 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7168 */;

const require = globalThis.__r;

const require = fn;
const PremiumConstants = fn(1392);
({ PremiumTypes: metroRequire, FractionalPremiumStates: closure_7 } = PremiumConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchReferralsRemaining(arg0) {
  const cResult = require("c").c(11);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function f() {
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
  const tmpResult4 = require("PremiumSubscriptionOfferUtil");
  const hasActiveTrial = require("PremiumSubscriptionTrialUtil").useHasActiveTrial();
  const tmp11 = useFractionalPremiumInfoDefault();
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === hasActiveTrial) {
        if (cResult[5] === hasDiscountApplied) {
          let tmp12 = cResult[6];
        }
        importDefault = tmp12;
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp12) {
            let tmp16 = cResult[9];
            let tmp17 = cResult[10];
          }
          const effect = noop.useEffect(tmp16, tmp17);
          class S {
            constructor() {
              tmp = closure_1;
              if (closure_1) {
                tmp2 = closure_0;
                tmp = !closure_0;
              }
              if (tmp) {
                tmp3 = closure_5;
                result = closure_5.checkAndFetchReferralsRemaining();
              }
              return;
            }
          }
        }
        class S {
          constructor() {
            tmp = closure_1;
            if (closure_1) {
              tmp2 = closure_0;
              tmp = !closure_0;
            }
            if (tmp) {
              tmp3 = closure_5;
              result = closure_5.checkAndFetchReferralsRemaining();
            }
            return;
          }
        }
        const items1 = [tmp12, tmp4];
        cResult[7] = tmp4;
        cResult[8] = tmp12;
        cResult[9] = S;
        cResult[10] = items1;
        tmp17 = items1;
        tmp16 = S;
      }
    }
  }
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  let fetched = true === verified;
  if (fetched) {
    fetched = tmp(1989).isPremiumExactly(stateFromStores, closure_6.TIER_2);
    const tmpResult6 = tmp(1989);
  }
  if (fetched) {
    fetched = tmp11.fetched;
  }
  if (fetched) {
    fetched = tmp11.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  cResult[2] = stateFromStores;
  cResult[3] = tmp11;
  cResult[4] = hasActiveTrial;
  cResult[5] = hasDiscountApplied;
  cResult[6] = fetched;
  tmp12 = fetched;
  const tmpResult5 = require("PremiumSubscriptionTrialUtil");
}) : (function useMaybeFetchReferralsRemaining() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let fetched;
  const items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  let tmp = flag;
  const hasDiscountApplied = flag(8069).useHasDiscountApplied();
  const obj2 = flag(8069);
  const hasActiveTrial = flag(8070).useHasActiveTrial();
  const tmp6 = fetched(7102)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1989).isPremiumExactly(stateFromStores, closure_6.TIER_2);
    const tmpResult = tmp(1989);
  }
  if (fetched) {
    fetched = tmp6.fetched;
  }
  if (fetched) {
    fetched = tmp6.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  const items1 = [fetched, flag];
  const effect = noop.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
  const obj3 = flag(8070);
});
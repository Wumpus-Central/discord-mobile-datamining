// === Module 7728: useMaybeFetchReferralsRemaining ===

// Module 7728 (useMaybeFetchReferralsRemaining)
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6898 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
({ PremiumTypes: metroRequire, FractionalPremiumStates: metroImportDefault } = PremiumConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let currentUser;
  let tmp5;
  let tmp6;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult4 = tmp(7729);
  const hasDiscountApplied = tmpResult4.useHasDiscountApplied();
  const tmpResult5 = tmp(7730);
  const hasActiveTrial = tmpResult5.useHasActiveTrial();
  const tmp11 = useFractionalPremiumInfoDefault();
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === hasActiveTrial) {
        let tmp12;
        if (cResult[5] === hasDiscountApplied) {
          tmp12 = cResult[6];
        }
        importDefault = tmp12;
        if (cResult[7] === (undefined !== arg0 && arg0)) {
          let tmp16;
          let tmp17;
          if (cResult[8] === tmp12) {
            tmp16 = cResult[9];
            tmp17 = cResult[10];
          }
          const effect = react.useEffect(tmp16, tmp17);
        }
        const fn2 = function y() {
          const tmp = closure_1 && !closure_0;
          if (tmp) {
            const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
          }
        };
        const items1 = [tmp12, undefined !== arg0 && arg0];
        cResult[7] = undefined !== arg0 && arg0;
        cResult[8] = tmp12;
        cResult[9] = fn2;
        cResult[10] = items1;
        tmp17 = items1;
        tmp16 = fn2;
      }
    }
  }
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  let fetched = true === verified;
  if (fetched) {
    const tmpResult6 = tmp(1976);
    fetched = tmpResult6.isPremiumExactly(stateFromStores, closure_6.TIER_2);
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
}) : (() => {
  let currentUser;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let fetched;
  let tmp = flag;
  const items = [UserStore];
  const obj = flag(504);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = flag(7729);
  const hasDiscountApplied = obj2.useHasDiscountApplied();
  const obj3 = flag(7730);
  const hasActiveTrial = obj3.useHasActiveTrial();
  const tmp6 = fetched(6898)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    const tmpResult = tmp(1976);
    fetched = tmpResult.isPremiumExactly(stateFromStores, closure_6.TIER_2);
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
  const effect = react.useEffect(() => {
    const tmp = fetched && !flag;
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = tmp3;
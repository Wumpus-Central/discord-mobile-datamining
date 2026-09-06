// === Module 8057: useMaybeFetchReferralsRemaining ===

// Module 8057 (useMaybeFetchReferralsRemaining)
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import closure_5 from "emitChanges" /* 7452 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

const require = arg1;
({ PremiumTypes: closure_6, FractionalPremiumStates: error } = GuildFeatures);
let result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [closure_4];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  let tmp = flag;
  const hasDiscountApplied = flag(8058).useHasDiscountApplied();
  const obj2 = flag(8058);
  const hasActiveTrial = flag(8059).useHasActiveTrial();
  const tmp6 = fetched(7393)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1885).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const tmpResult = tmp(1885);
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
  const effect = React.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = closure_1_5.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
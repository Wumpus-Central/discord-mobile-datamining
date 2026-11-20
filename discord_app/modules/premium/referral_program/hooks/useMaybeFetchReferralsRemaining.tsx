// === Module 8737: useMaybeFetchReferralsRemaining ===

// Module 8737 (useMaybeFetchReferralsRemaining)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import ReferralTrialStore from "ReferralTrialStore" /* 8722 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export function useMaybeFetchReferralsRemaining() {
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  const hasDiscountApplied = flag(8738).useHasDiscountApplied();
  const obj3 = flag(8738);
  let verified;
  const hasActiveTrial = flag(8741).useHasActiveTrial();
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  const tmp4 = true === verified && stateFromStores.hasPaidTier2Subscription() && !hasDiscountApplied && !hasActiveTrial;
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
}
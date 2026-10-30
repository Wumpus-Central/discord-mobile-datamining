// discord_app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export function useMaybeFetchReferralsRemaining() {
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  const items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  const hasDiscountApplied = flag(8518).useHasDiscountApplied();
  const obj3 = flag(8518);
  let verified;
  const hasActiveTrial = flag(8519).useHasActiveTrial();
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
}

// discord_app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import emitChanges from "../../ReferralTrialStore.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";

const require = fn;
({ PremiumTypes: closure_6, FractionalPremiumStates: error } = GuildFeatures);
let result = require("obj132").fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [closure_4];
  const stateFromStores = flag(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(589);
  let tmp = flag;
  const hasDiscountApplied = flag(8276).useHasDiscountApplied();
  const obj2 = flag(8276);
  const hasActiveTrial = flag(8277).useHasActiveTrial();
  const tmp6 = fetched(5356)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1945).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const tmpResult = tmp(1945);
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
  const obj3 = flag(8277);
};
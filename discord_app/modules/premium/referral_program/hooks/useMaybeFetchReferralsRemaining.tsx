// discord_app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import emitChanges from "emitChanges";
import GuildFeatures from "GuildFeatures";

let closure_6;
let error;
const require = arg1;
({ PremiumTypes: closure_6, FractionalPremiumStates: error } = GuildFeatures);
let result = require("emitChanges").fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [mergeGuildAvatar];
  const stateFromStores = flag(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(589);
  let tmp = flag;
  const hasDiscountApplied = flag(8166).useHasDiscountApplied();
  const obj2 = flag(8166);
  const hasActiveTrial = flag(8167).useHasActiveTrial();
  const tmp6 = fetched(6862)();
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
      const result = outer1_5.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
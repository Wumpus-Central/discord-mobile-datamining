// === Module 9377: useIsUserEligibleForThirdPartyPerks ===

// Module 9377 (useIsUserEligibleForThirdPartyPerks)
import initialize from "initialize" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import ThirdPartyPerkUtils from "ThirdPartyPerkUtils" /* 9378 */;
import UserStore from "UserStore" /* 1387 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/partner_perks/useIsUserEligibleForThirdPartyPerks.tsx");

export function useIsUserEligibleForThirdPartyPerks() {
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [SubscriptionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => SubscriptionStore.getPremiumTypeSubscription());
  const items2 = [SubscriptionStore];
  if (!obj3.useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions())) {
    if (tmpResult.isPremium(stateFromStores)) {
      return null;
    }
    tmpResult = PremiumTypeUtils;
  }
  obj3 = initialize;
  const result = ThirdPartyPerkUtils.isUserEligibleForThirdPartyPerks(stateFromStores, stateFromStores1);
  const reason = result.reason;
  const obj4 = { isEligible: result.isEligible, state: null, reason: null };
  const tmpResult3 = ThirdPartyPerkUtils;
  obj4.state = ThirdPartyPerkUtils.getThirdPartyPerkClaimState(reason);
  obj4.reason = reason;
  return obj4;
}
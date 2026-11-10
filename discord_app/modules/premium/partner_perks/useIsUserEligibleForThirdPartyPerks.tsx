// discord_app/modules/premium/partner_perks/useIsUserEligibleForThirdPartyPerks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import ThirdPartyPerkUtils from "ThirdPartyPerkUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

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

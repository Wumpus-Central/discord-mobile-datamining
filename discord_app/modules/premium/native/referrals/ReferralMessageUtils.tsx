// === Module 13039: ReferralMessageUtils ===

// Module 13039 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2056 */;
import UserOfferStore from "UserOfferStore" /* 7618 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
}
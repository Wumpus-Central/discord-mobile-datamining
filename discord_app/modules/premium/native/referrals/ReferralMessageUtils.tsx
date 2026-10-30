// === Module 13191: ReferralMessageUtils ===

// Module 13191 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import UserOfferStore from "UserOfferStore" /* 7623 */;

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
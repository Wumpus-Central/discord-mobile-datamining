// discord_app/modules/premium/native/referrals/ReferralMessageUtils.tsx
import closure_0 from "../../../../stores/billing/SubscriptionStore.tsx";
import closure_1 from "../../../../stores/billing/UserOfferStore.tsx";

let result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = closure_0.getPremiumTypeSubscription(false);
  let result = closure_0.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};

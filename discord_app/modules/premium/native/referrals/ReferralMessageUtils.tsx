// discord_app/modules/premium/native/referrals/ReferralMessageUtils.tsx
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import emitChanges from "../../../../stores/billing/UserOfferStore.tsx";

let result = require("obj132").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

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
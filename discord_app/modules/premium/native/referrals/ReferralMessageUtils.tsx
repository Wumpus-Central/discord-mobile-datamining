// === Module 11374: canOpenPremiumPlanDirectlyForReferralTrial ===

// Module 11374 (canOpenPremiumPlanDirectlyForReferralTrial)
import closure_0 from "reset" /* 4049 */;
import closure_1 from "emitChanges" /* 7057 */;

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
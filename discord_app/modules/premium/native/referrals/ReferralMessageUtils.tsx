// === Module 11615: canOpenPremiumPlanDirectlyForReferralTrial ===

// Module 11615 (canOpenPremiumPlanDirectlyForReferralTrial)
import closure_0 from "reset" /* 4145 */;
import closure_1 from "emitChanges" /* 7205 */;

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
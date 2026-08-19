// === Module 10993: canOpenPremiumPlanDirectlyForReferralTrial ===

// Module 10993 (canOpenPremiumPlanDirectlyForReferralTrial)
import reset from "reset" /* 4045 */;
import emitChanges from "emitChanges" /* 7421 */;

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
// === Module 9565: getTrialCtaOverride ===

// Module 9565 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 4483 */;
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 9566 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/getTrialCtaOverride.tsx");

export const getTrialCtaOverride = function getTrialCtaOverride(premiumTrialOffer, TIER_2) {
  let result = null;
  if (null != TIER_2) {
    let isReferralTrial;
    if (premiumTrialOffer != null) {
      isReferralTrial = premiumTrialOffer.isReferralTrial;
    }
    result = null;
    if (true === isReferralTrial) {
      result = null;
      if (obj.getReferralTrialCtaExperimentEnabled()) {
        result = PremiumUtils.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
        const tmp4Result = PremiumUtils;
      }
      obj = ReferralTrialCtaExperiment;
    }
  }
  return result;
};
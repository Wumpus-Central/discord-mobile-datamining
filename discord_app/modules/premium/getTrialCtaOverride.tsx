// === Module 9803: getTrialCtaOverride ===

// Module 9803 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 2050 */;
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 9804 */;
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
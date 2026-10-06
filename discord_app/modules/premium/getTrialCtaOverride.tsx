// === Module 8904: getTrialCtaOverride ===

// Module 8904 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 4534 */;
import ReferralTrialCtaExperiment from "ReferralTrialCtaExperiment" /* 8905 */;
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
      const obj = ReferralTrialCtaExperiment;
      if (obj.getReferralTrialCtaExperimentEnabled()) {
        const tmp4Result = PremiumUtils;
        result = tmp4Result.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
      }
    }
  }
  return result;
};
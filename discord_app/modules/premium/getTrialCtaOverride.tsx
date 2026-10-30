// === Module 9893: getTrialCtaOverride ===

// Module 9893 (getTrialCtaOverride)
import PremiumUtils from "PremiumUtils" /* 2048 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/getTrialCtaOverride.tsx");

export function getTrialCtaOverride(premiumTrialOffer, TIER_2) {
  let result = null;
  if (null != TIER_2) {
    let isReferralTrial;
    if (premiumTrialOffer != null) {
      isReferralTrial = premiumTrialOffer.isReferralTrial;
    }
    result = null;
    if (true === isReferralTrial) {
      result = PremiumUtils.formatTrialCtaIntervalDurationFromTrialOffer(premiumTrialOffer, TIER_2);
    }
  }
  return result;
}
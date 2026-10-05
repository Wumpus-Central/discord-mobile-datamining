// discord_app/modules/premium/getTrialCtaOverride.tsx
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import ReferralTrialCtaExperiment from "experiments/ReferralTrialCtaExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

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

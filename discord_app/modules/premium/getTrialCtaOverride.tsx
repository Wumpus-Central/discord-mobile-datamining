// discord_app/modules/premium/getTrialCtaOverride.tsx
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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

// === Module 13157: MobileRoadblockCtaUtils ===

// Module 13157 (MobileRoadblockCtaUtils)
import util from "util" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import getTrialCtaOverride from "getTrialCtaOverride" /* 8904 */;
import MobileRoadblockOfferCtaExperiment from "MobileRoadblockOfferCtaExperiment" /* 13158 */;
import size from "module_2" /* 2 */;

const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/MobileRoadblockCtaUtils.tsx");

export const formatMobileRoadblockOfferText = function formatMobileRoadblockOfferText(arg0) {
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  if (subscriptionTier !== PremiumSubscriptionSKUs.TIER_2) {
    return null;
  } else if (null != discountOffer) {
    const intl = util.intl;
    const obj3 = { percent: discountOffer.discount.amount };
    return intl.formatToPlainString(util.t.bkQ4bH, obj3);
  } else {
    if (trialOffer != null) {
      const subscriptionTrial = trialOffer.subscriptionTrial;
    }
    let result = null;
    if (null != trialOffer) {
      result = null;
      if (null != subscriptionTrial) {
        result = null;
        if (subscriptionTrial.skuId === subscriptionTier) {
          result = null;
          if (!trialOffer.isReferralTrial) {
            ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
            result = PremiumUtils.formatTrialCtaIntervalDuration({ intervalType: null, intervalCount: null });
            const obj5 = { intervalType: null, intervalCount: null };
          }
        }
      }
    }
    return result;
  }
};
export const getMobileRoadblockButtonText = function getMobileRoadblockButtonText(arg0) {
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  let isReferralTrial;
  if (trialOffer != null) {
    isReferralTrial = trialOffer.isReferralTrial;
  }
  if (true === isReferralTrial) {
    return getTrialCtaOverride.getTrialCtaOverride(trialOffer, subscriptionTier);
  } else {
    let formatToPlainStringResult = null;
    if (subscriptionTier === PremiumSubscriptionSKUs.TIER_2) {
      if (null != discountOffer) {
        const intl = util.intl;
        const obj3 = { percent: discountOffer.discount.amount };
        formatToPlainStringResult = intl.formatToPlainString(util.t.bkQ4bH, obj3);
      } else {
        if (trialOffer != null) {
          const subscriptionTrial = trialOffer.subscriptionTrial;
        }
        let result = null;
        if (null != trialOffer) {
          result = null;
          if (null != subscriptionTrial) {
            result = null;
            if (subscriptionTrial.skuId === subscriptionTier) {
              result = null;
              if (!trialOffer.isReferralTrial) {
                ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
                result = PremiumUtils.formatTrialCtaIntervalDuration({ intervalType: null, intervalCount: null });
                const obj7 = { intervalType: null, intervalCount: null };
              }
            }
          }
        }
        formatToPlainStringResult = result;
      }
    }
    let tmp8 = null;
    if (null != formatToPlainStringResult) {
      if (!obj4.getMobileRoadblockOfferCtaEnabled()) {
        const intl2 = util.intl;
        formatToPlainStringResult = intl2.string(util.t["8x0jKT"]);
      }
      tmp8 = formatToPlainStringResult;
      obj4 = MobileRoadblockOfferCtaExperiment;
    }
    return tmp8;
  }
};
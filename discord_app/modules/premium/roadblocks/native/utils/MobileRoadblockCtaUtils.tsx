// discord_app/modules/premium/roadblocks/native/utils/MobileRoadblockCtaUtils.tsx
import intl3 from "../../../../../intl/index.native.tsx";
import PremiumConstants from "../../../PremiumConstants.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import getTrialCtaOverride from "../../../getTrialCtaOverride.tsx";
import MobileRoadblockOfferCtaExperiment from "../../../experiments/MobileRoadblockOfferCtaExperiment.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/MobileRoadblockCtaUtils.tsx");

export const formatMobileRoadblockOfferText = function formatMobileRoadblockOfferText(arg0) {
  let discountOffer;
  let subscriptionTier;
  let trialOffer;
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  if (subscriptionTier !== PremiumSubscriptionSKUs.TIER_2) {
    return null;
  } else if (null != discountOffer) {
    const intl = intl3.intl;
    const obj3 = { percent: discountOffer.discount.amount };
    return intl.formatToPlainString(intl3.t.bkQ4bH, obj3);
  } else {
    let subscriptionTrial;
    if (trialOffer != null) {
      subscriptionTrial = trialOffer.subscriptionTrial;
    }
    let result = null;
    if (null != trialOffer) {
      result = null;
      if (null != subscriptionTrial) {
        result = null;
        if (subscriptionTrial.skuId === subscriptionTier) {
          result = null;
          if (!trialOffer.isReferralTrial) {
            const obj5 = { intervalType: null, intervalCount: null };
            ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
            const obj = PremiumUtils;
            result = obj.formatTrialCtaIntervalDuration(obj5);
          }
        }
      }
    }
    return result;
  }
};
export const getMobileRoadblockButtonText = function getMobileRoadblockButtonText(arg0) {
  let discountOffer;
  let subscriptionTier;
  let trialOffer;
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  let isReferralTrial;
  if (trialOffer != null) {
    isReferralTrial = trialOffer.isReferralTrial;
  }
  if (true === isReferralTrial) {
    const obj5 = getTrialCtaOverride;
    return obj5.getTrialCtaOverride(trialOffer, subscriptionTier);
  } else {
    let formatToPlainStringResult = null;
    if (subscriptionTier === PremiumSubscriptionSKUs.TIER_2) {
      if (null != discountOffer) {
        const intl = intl3.intl;
        const obj3 = { percent: discountOffer.discount.amount };
        formatToPlainStringResult = intl.formatToPlainString(intl3.t.bkQ4bH, obj3);
      } else {
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
        let result = null;
        if (null != trialOffer) {
          result = null;
          if (null != subscriptionTrial) {
            result = null;
            if (subscriptionTrial.skuId === subscriptionTier) {
              result = null;
              if (!trialOffer.isReferralTrial) {
                const obj7 = { intervalType: null, intervalCount: null };
                ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
                const obj = PremiumUtils;
                result = obj.formatTrialCtaIntervalDuration(obj7);
              }
            }
          }
        }
        formatToPlainStringResult = result;
      }
    }
    let tmp8 = null;
    if (null != formatToPlainStringResult) {
      const obj4 = MobileRoadblockOfferCtaExperiment;
      if (!obj4.getMobileRoadblockOfferCtaEnabled()) {
        const intl2 = intl3.intl;
        formatToPlainStringResult = intl2.string(intl3.t["8x0jKT"]);
      }
      tmp8 = formatToPlainStringResult;
    }
    return tmp8;
  }
};

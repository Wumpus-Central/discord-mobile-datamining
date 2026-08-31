// === Module 7159: useShouldShowPremiumTrialUserSettingsAvatarBadge ===

// Module 7159 (useShouldShowPremiumTrialUserSettingsAvatarBadge)
import set from "set" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1373 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4268 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7160 */;

let closure_2 = GuildFeatures.PremiumSubscriptionSKUToPremiumType;
let result = set.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const obj = usePremiumTrialOffer;
  let tmp3 = null != premiumTrialOffer;
  const result = UNSAFE_isDismissibleContentDismissed.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (tmp3) {
    let hasAcknowledged;
    if (premiumTrialOffer != null) {
      hasAcknowledged = premiumTrialOffer.hasAcknowledged;
    }
    tmp3 = true !== hasAcknowledged;
  }
  if (tmp3) {
    tmp3 = !result;
  }
  return tmp3;
};
export const usePremiumTrialOfferPremiumType = function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return table[skuId];
};
export const useNitroTrialCtaOverride = function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  let obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    let tmpResult = tmp(12926);
    obj = { location: null };
    obj[0] = user_profile_premium_upsell_card;
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      tmpResult = tmp(4109);
      obj = { intervalType: null, intervalCount: null };
      ({ interval: obj3[0], intervalCount: obj3[1] } = subscriptionTrial);
      const result = tmpResult.formatIntervalDuration(obj);
      const intl = tmp(1236).intl;
      obj1 = { duration: null };
      obj1[0] = result;
      return intl.formatToPlainString(tmp(1236).t["6xpY54"], obj1);
    } else {
      return null;
    }
  }
};
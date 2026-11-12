// === Module 9539: MobileTrialUtils ===

// Module 9539 (MobileTrialUtils)
import util from "util" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 9243 */;
import size from "module_2" /* 2 */;

let closure_2 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let tmp3 = null != premiumTrialOffer;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
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
}
export function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return closure_2[skuId];
}
export function useNitroTrialCtaOverride() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
    const result = PremiumUtils.formatIntervalDuration({ intervalType: null, intervalCount: null });
    const intl = util.intl;
    const obj4 = { duration: result };
    return intl.formatToPlainString(util.t["6xpY54"], obj4);
  }
}
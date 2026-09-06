// === Module 16803: useShouldShowExpiringTrialOfferCard ===

// Module 16803 (useShouldShowExpiringTrialOfferCard)
import useStateFromStores from "useStateFromStores" /* 563 */;
import DurationsDefault from "Durations" /* 1090 */;
import useCountdownDefault from "useCountdown" /* 7439 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7447 */;
import NoticeStore from "NoticeStore" /* 13722 */;

require = fn;
const NoticeTypes = fn(1074).NoticeTypes;
const PremiumSubscriptionSKUs = fn(1373).PremiumSubscriptionSKUs;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [NoticeStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => noticeType.getNoticeType());
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  if (null != premiumTrialOffer) {
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      const num = expiresAt.getTime();
    }
  }
  let tmp5 = null != premiumTrialOffer;
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
    const tmp6 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (!tmp5) {
    if (tmp5) {
      tmp5 = null != premiumTrialOffer.expiresAt;
    }
    if (tmp5) {
      const _Object = Object;
      const values = Object.values(tmp3Result);
      tmp5 = !values.every((item) => 0 === item);
    }
    return tmp5;
  } else {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    if (null == stateFromStores) {
      let TIER_0 = PremiumSubscriptionSKUs.NONE;
    } else {
      if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.TIER_2;
      } else if (tmp8.PREMIUM_TIER_0_TRIAL_ENDING !== stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.NONE;
      }
      TIER_0 = PremiumSubscriptionSKUs.TIER_0;
    }
  }
};
// === Module 16022: useShouldShowExpiringTrialOfferCard ===

// Module 16022 (useShouldShowExpiringTrialOfferCard)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import obj132Default from "obj132" /* 687 */;
import useCountdownDefault from "useCountdown" /* 7410 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7418 */;
import clearDismissUntil from "clearDismissUntil" /* 13270 */;
import { NoticeTypes } from "ME" /* 676 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1924 */;

require = fn;
let closure_6 = 10 * obj132Default.Millis.SECOND;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [closure_3];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => noticeType.getNoticeType());
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let num = 0;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  let tmp5 = null != premiumTrialOffer;
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (!tmp5) {
    if (tmp5) {
      tmp5 = null != premiumTrialOffer.expiresAt;
    }
    if (tmp5) {
      const _Object = Object;
      const values = Object.values(tmp3Result);
      tmp5 = !values.every((item, index) => 0 === item);
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
  tmp3Result = useCountdownDefault(num, closure_6);
};
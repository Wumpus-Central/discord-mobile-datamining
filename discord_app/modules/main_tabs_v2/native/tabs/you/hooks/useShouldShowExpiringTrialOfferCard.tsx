// === Module 16152: useShouldShowExpiringTrialOfferCard ===

// Module 16152 (useShouldShowExpiringTrialOfferCard)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import setDefault from "set" /* 687 */;
import useCountdownDefault from "useCountdown" /* 7046 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7054 */;
import closure_3 from "clearDismissUntil" /* 13190 */;
import { NoticeTypes } from "ME" /* 676 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1924 */;

require = arg1;
let closure_6 = 10 * setDefault.Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [closure_3];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => noticeType.getNoticeType());
  const obj = defaultAreStatesEqual;
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let num = 0;
  const obj2 = usePremiumTrialOffer;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  let tmp5 = null != premiumTrialOffer;
  const tmp3 = useCountdownDefault;
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
      tmp5 = !values.every((arg0) => 0 === arg0);
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
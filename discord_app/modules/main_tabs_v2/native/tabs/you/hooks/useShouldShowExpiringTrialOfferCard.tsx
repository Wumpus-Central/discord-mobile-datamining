// discord_app/modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx
import clearDismissUntil from "clearDismissUntil";
import { NoticeTypes } from "ME";
import { PremiumSubscriptionSKUs } from "GuildFeatures";

const require = arg1;
let closure_6 = 10 * require("set").Millis.SECOND;
const result = require("GuildFeatures").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [clearDismissUntil];
  const stateFromStores = require("../../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx") /* defaultAreStatesEqual */.useStateFromStores(items, () => noticeType.getNoticeType());
  const obj = require("../../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx") /* defaultAreStatesEqual */;
  const premiumTrialOffer = require("../../../../../premium/hooks/usePremiumTrialOffer.android.tsx") /* usePremiumTrialOffer */.usePremiumTrialOffer();
  let num = 0;
  const obj2 = require("../../../../../premium/hooks/usePremiumTrialOffer.android.tsx") /* usePremiumTrialOffer */;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expires_at) {
      const _Date = Date;
      num = Date.parse(premiumTrialOffer.expires_at);
    }
  }
  let tmp6 = null != premiumTrialOffer;
  const tmp3 = require("../../../../../../hooks/useCountdown.tsx");
  if (tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (tmp6) {
    tmp6 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
    const tmp7 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (!tmp6) {
    if (tmp6) {
      tmp6 = null != premiumTrialOffer.expires_at;
    }
    if (tmp6) {
      const _Object = Object;
      const values = Object.values(tmp3Result);
      tmp6 = !values.every((arg0) => 0 === arg0);
    }
    return tmp6;
  } else {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    let sku_id;
    if (subscription_trial != null) {
      sku_id = subscription_trial.sku_id;
    }
    if (null == stateFromStores) {
      let TIER_0 = PremiumSubscriptionSKUs.NONE;
    } else {
      if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.TIER_2;
      } else if (tmp9.PREMIUM_TIER_0_TRIAL_ENDING !== stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.NONE;
      }
      TIER_0 = PremiumSubscriptionSKUs.TIER_0;
    }
  }
};
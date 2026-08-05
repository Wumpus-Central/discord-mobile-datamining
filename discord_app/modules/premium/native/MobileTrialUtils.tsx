// discord_app/modules/premium/native/MobileTrialUtils.tsx
import { PremiumSubscriptionSKUToPremiumType as closure_2 } from "GuildFeatures";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const premiumTrialOffer = require(6820) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  const obj = require(6820) /* usePremiumTrialOffer */;
  let tmp3 = null != premiumTrialOffer;
  const result = require(4101) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1358) /* DismissibleContent */.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (tmp3) {
    let expires_at;
    if (premiumTrialOffer != null) {
      expires_at = premiumTrialOffer.expires_at;
    }
    tmp3 = null == expires_at;
  }
  if (tmp3) {
    tmp3 = !result;
  }
  return tmp3;
};
export const usePremiumTrialOfferPremiumType = function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = require(6820) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  let sku_id;
  if (premiumTrialOffer != null) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (subscription_trial != null) {
      sku_id = subscription_trial.sku_id;
    }
  }
  return table[sku_id];
};
export const useNitroTrialCtaOverride = function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  let obj = require(6820) /* usePremiumTrialOffer */;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscription_trial;
  if (premiumTrialOffer != null) {
    subscription_trial = premiumTrialOffer.subscription_trial;
  }
  if (null == subscription_trial) {
    return null;
  } else {
    let tmpResult = tmp(7250);
    obj = { location: null };
    obj[0] = user_profile_premium_upsell_card;
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      tmpResult = tmp(3931);
      obj = { intervalType: null, intervalCount: null };
      ({ interval: obj3[0], interval_count: obj3[1] } = subscription_trial);
      const result = tmpResult.formatIntervalDuration(obj);
      const intl = tmp(1236).intl;
      const obj1 = { duration: null };
      obj1[0] = result;
      return intl.formatToPlainString(tmp(1236).t["6xpY54"], obj1);
    } else {
      return null;
    }
  }
};
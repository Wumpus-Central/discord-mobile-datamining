// discord_app/modules/premium/native/MobileTrialUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import GuildFeatures from "../PremiumConstants.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";

let closure_2 = GuildFeatures.PremiumSubscriptionSKUToPremiumType;
let result = set.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const obj = usePremiumTrialOffer;
  let tmp3 = null != premiumTrialOffer;
  const result = UNSAFE_isDismissibleContentDismissed.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (tmp3) {
    let expiresAt;
    if (premiumTrialOffer != null) {
      expiresAt = premiumTrialOffer.expiresAt;
    }
    tmp3 = null == expiresAt;
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
    let tmpResult = tmp(7471);
    obj = { location: null };
    obj[0] = user_profile_premium_upsell_card;
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      tmpResult = tmp(4043);
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
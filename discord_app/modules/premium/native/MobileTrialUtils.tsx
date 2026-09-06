// discord_app/modules/premium/native/MobileTrialUtils.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge =
  function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
    const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
    let tmp3 = null != premiumTrialOffer;
    const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
      dismissible_content.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE,
    );
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
  return closure_2[skuId];
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
    let tmpResult = tmp(13298);
    obj = { location: user_profile_premium_upsell_card };
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      tmpResult = tmp(4218);
      obj = { intervalType: null, intervalCount: null };
      ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
      const result = tmpResult.formatIntervalDuration(obj);
      const intl = tmp(1114).intl;
      const obj1 = { duration: result };
      return intl.formatToPlainString(tmp(1114).t["6xpY54"], obj1);
    } else {
      return null;
    }
  }
};

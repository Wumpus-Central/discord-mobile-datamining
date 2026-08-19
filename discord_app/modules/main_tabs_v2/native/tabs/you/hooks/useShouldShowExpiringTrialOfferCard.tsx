// discord_app/modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx
import defaultAreStatesEqual from "../../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import obj132Default from "../../../../../../utils/Durations.tsx";
import useCountdownDefault from "../../../../../../hooks/useCountdown.tsx";
import usePremiumTrialOffer from "../../../../../premium/hooks/usePremiumTrialOffer.android.tsx";
import clearDismissUntil from "../../../../../premium/native/NoticeStore.tsx";
import { NoticeTypes } from "../../../../../../Constants.tsx";
import { PremiumSubscriptionSKUs } from "../../../../../premium/PremiumConstants.tsx";

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
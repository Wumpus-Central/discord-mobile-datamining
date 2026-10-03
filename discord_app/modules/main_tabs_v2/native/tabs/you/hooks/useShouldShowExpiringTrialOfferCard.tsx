// === Module 16958: useShouldShowExpiringTrialOfferCard ===

// Module 16958 (useShouldShowExpiringTrialOfferCard)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import useCountdownDefault from "useCountdown" /* 6948 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6956 */;
import NoticeStore from "NoticeStore" /* 13531 */;

require = fn;
const NoticeTypes = fn(1085).NoticeTypes;
const PremiumSubscriptionSKUs = fn(1379).PremiumSubscriptionSKUs;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NoticeStore];
    const fn = function n() {
      return noticeType.getNoticeType();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  const tmpResult = useStateFromStores;
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  if (cResult[2] !== premiumTrialOffer) {
    let num3 = 0;
    if (null != premiumTrialOffer) {
      num3 = 0;
      if (null != premiumTrialOffer.expiresAt) {
        const expiresAt = premiumTrialOffer.expiresAt;
        num3 = expiresAt.getTime();
      }
    }
    cResult[2] = premiumTrialOffer;
    cResult[3] = num3;
    let tmp9 = num3;
  } else {
    tmp9 = cResult[3];
  }
  const tmp11 = useCountdownDefault(tmp9, closure_6);
  if (cResult[4] === tmp11) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === premiumTrialOffer) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  let tmp13 = null != premiumTrialOffer && null != stateFromStores;
  if (tmp13) {
    tmp13 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
    const tmp14 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (!tmp13) {
    if (tmp13) {
      tmp13 = null != premiumTrialOffer.expiresAt;
    }
    if (tmp13) {
      const _Object = Object;
      const values = Object.values(tmp11);
      tmp13 = !values.every((item) => 0 === item);
    }
    cResult[4] = tmp11;
    cResult[5] = stateFromStores;
    cResult[6] = premiumTrialOffer;
    cResult[7] = tmp13;
    tmp12 = tmp13;
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
      } else if (tmp16.PREMIUM_TIER_0_TRIAL_ENDING !== stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.NONE;
      }
      TIER_0 = PremiumSubscriptionSKUs.TIER_0;
    }
  }
  const tmpResult2 = usePremiumTrialOffer;
}) : (() => {
  const items = [NoticeStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => noticeType.getNoticeType());
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
  tmp3Result = useCountdownDefault(num, closure_6);
});
// === Module 17003: useShouldShowExpiringTrialOfferCard ===

// Module 17003 (useShouldShowExpiringTrialOfferCard)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import useCountdownDefault from "useCountdown" /* 6961 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6969 */;
import NoticeStore from "NoticeStore" /* 13549 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const NoticeTypes = Constants.NoticeTypes;
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let noticeType;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react;
  const cResult = obj.c(8);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult2.usePremiumTrialOffer();
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
    tmp9 = num3;
  } else {
    tmp9 = cResult[3];
  }
  const tmp11 = useCountdownDefault(tmp9, closure_6);
  if (cResult[4] === tmp11) {
    if (cResult[5] === stateFromStores) {
      let tmp12;
      if (cResult[6] === premiumTrialOffer) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  let tmp13 = null != premiumTrialOffer && null != stateFromStores;
  if (tmp13) {
    tmp13 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (tmp13) {
    let NONE;
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    if (null == stateFromStores) {
      NONE = PremiumSubscriptionSKUs.NONE;
    } else if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_2;
    } else if (tmp16.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_0;
    } else {
      NONE = PremiumSubscriptionSKUs.NONE;
    }
    tmp13 = skuId === NONE;
  }
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
}) : (() => {
  let noticeType;
  const items = [NoticeStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => noticeType.getNoticeType());
  const obj2 = usePremiumTrialOffer;
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  let num = 0;
  const tmp3 = useCountdownDefault;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  let tmp5 = null != premiumTrialOffer;
  const tmp3Result = tmp3(num, closure_6);
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (tmp5) {
    let NONE;
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    if (null == stateFromStores) {
      NONE = PremiumSubscriptionSKUs.NONE;
    } else if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_2;
    } else if (tmp8.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_0;
    } else {
      NONE = PremiumSubscriptionSKUs.NONE;
    }
    tmp5 = skuId === NONE;
  }
  if (tmp5) {
    tmp5 = null != premiumTrialOffer.expiresAt;
  }
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(tmp3Result);
    tmp5 = !values.every((item) => 0 === item);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = tmp2;
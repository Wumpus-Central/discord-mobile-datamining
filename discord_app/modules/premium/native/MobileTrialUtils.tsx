// discord_app/modules/premium/native/MobileTrialUtils.tsx
import react from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import AndroidTwoWeekTrialsExperiment from "../experiments/AndroidTwoWeekTrialsExperiment.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = usePremiumTrialOffer;
      const premiumTrialOffer = obj.usePremiumTrialOffer();
      let tmp3 = null != premiumTrialOffer;
      const obj2 = DismissibleContentUnsafeUtils;
      const result = obj2.useIsDismissibleContentDismissed_UNSAFE(
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
    }
  : () => {
      const obj = usePremiumTrialOffer;
      const premiumTrialOffer = obj.usePremiumTrialOffer();
      let tmp3 = null != premiumTrialOffer;
      const obj2 = DismissibleContentUnsafeUtils;
      const result = obj2.useIsDismissibleContentDismissed_UNSAFE(
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = usePremiumTrialOffer;
      const premiumTrialOffer = obj.usePremiumTrialOffer();
      let skuId;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
      }
      return closure_2[skuId];
    }
  : () => {
      const obj = usePremiumTrialOffer;
      const premiumTrialOffer = obj.usePremiumTrialOffer();
      let skuId;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
      }
      return closure_2[skuId];
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = usePremiumTrialOffer;
      const premiumTrialOffer = obj2.usePremiumTrialOffer();
      let subscriptionTrial;
      if (premiumTrialOffer != null) {
        subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      }
      if (null == subscriptionTrial) {
        return null;
      } else {
        const obj3 = { location };
        const tmpResult = AndroidTwoWeekTrialsExperiment;
        if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj3)) {
          if (cResult[0] === subscriptionTrial.interval) {
            let tmp6;
            if (cResult[1] === subscriptionTrial.intervalCount) {
              tmp6 = cResult[2];
            }
            return tmp6;
          }
          const obj5 = { intervalType: null, intervalCount: null };
          ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = subscriptionTrial);
          const tmpResult2 = PremiumUtils;
          const result = tmpResult2.formatIntervalDuration(obj5);
          const intl = intl2.intl;
          const obj6 = { duration: result };
          const formatToPlainStringResult = intl.formatToPlainString(intl2.t["6xpY54"], obj6);
          cResult[0] = subscriptionTrial.interval;
          cResult[1] = subscriptionTrial.intervalCount;
          cResult[2] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
        } else {
          return null;
        }
      }
    }
  : (location) => {
      const obj = usePremiumTrialOffer;
      const premiumTrialOffer = obj.usePremiumTrialOffer();
      let subscriptionTrial;
      if (premiumTrialOffer != null) {
        subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      }
      if (null == subscriptionTrial) {
        return null;
      } else {
        const obj2 = { location };
        const tmpResult = AndroidTwoWeekTrialsExperiment;
        if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj2)) {
          const obj4 = { intervalType: null, intervalCount: null };
          ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
          const tmpResult2 = PremiumUtils;
          const result = tmpResult2.formatIntervalDuration(obj4);
          const intl = intl2.intl;
          const obj5 = { duration: result };
          return intl.formatToPlainString(intl2.t["6xpY54"], obj5);
        } else {
          return null;
        }
      }
    };
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = tmp2;
export const usePremiumTrialOfferPremiumType = tmp3;
export const useNitroTrialCtaOverride = tmp4;

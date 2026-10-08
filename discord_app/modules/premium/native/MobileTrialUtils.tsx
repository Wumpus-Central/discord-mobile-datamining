// discord_app/modules/premium/native/MobileTrialUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import AndroidTwoWeekTrialsExperiment from "../experiments/AndroidTwoWeekTrialsExperiment.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const dependencyMap = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
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
    }
  : function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePremiumTrialOfferPremiumType() {
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      let skuId;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
      }
      return dependencyMap[skuId];
    }
  : function usePremiumTrialOfferPremiumType() {
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      let skuId;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
      }
      return dependencyMap[skuId];
    };
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = tmp2;
export const usePremiumTrialOfferPremiumType = tmp3;
export const useNitroTrialCtaOverride = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNitroTrialCtaOverride(location) {
      const cResult = c.c(3);
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      let subscriptionTrial;
      if (premiumTrialOffer != null) {
        subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      }
      if (null == subscriptionTrial) {
        return null;
      } else {
        const obj3 = { location };
        if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj3)) {
          if (cResult[0] === subscriptionTrial.interval) {
            if (cResult[1] === subscriptionTrial.intervalCount) {
              let tmp6 = cResult[2];
            }
            return tmp6;
          }
          ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = subscriptionTrial);
          const result = PremiumUtils.formatIntervalDuration({ intervalType: null, intervalCount: null });
          const intl = util.intl;
          const obj6 = { duration: result };
          const formatToPlainStringResult = intl.formatToPlainString(util.t["6xpY54"], obj6);
          cResult[0] = subscriptionTrial.interval;
          cResult[1] = subscriptionTrial.intervalCount;
          cResult[2] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
          const obj5 = { intervalType: null, intervalCount: null };
          const tmpResult2 = PremiumUtils;
        } else {
          return null;
        }
        tmpResult = AndroidTwoWeekTrialsExperiment;
      }
    }
  : function useNitroTrialCtaOverride(location) {
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      let subscriptionTrial;
      if (premiumTrialOffer != null) {
        subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      }
      if (null == subscriptionTrial) {
        return null;
      } else {
        const obj2 = { location };
        if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj2)) {
          ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
          const result = PremiumUtils.formatIntervalDuration({ intervalType: null, intervalCount: null });
          const intl = util.intl;
          const obj5 = { duration: result };
          return intl.formatToPlainString(util.t["6xpY54"], obj5);
        } else {
          return null;
        }
        tmpResult = AndroidTwoWeekTrialsExperiment;
      }
    };

// discord_app/modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
let closure_6 = {
  page: AnalyticsPages.USER_SETTINGS,
  section: AnalyticsSections.SETTINGS_PREMIUM,
  objectType: AnalyticsObjectTypes.BUY,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default function useOpenPremiumMarketingPayment(arg0) {
  const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[3])(arg0).analyticsLocations;
  let obj = analyticsLocations(premiumTrialOfferPremiumType[4]);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  premiumTrialOfferPremiumType = analyticsLocations(premiumTrialOfferPremiumType[5]).usePremiumTrialOfferPremiumType();
  obj = { openPayment: null, buttonText: null };
  const items = [analyticsLocations, premiumTrialOfferPremiumType];
  obj.openPayment = noop.useCallback(() => {
    const obj = {
      analyticsLocation,
      analyticsLocations,
      predicate: null,
      initialSelectedCriteria: null,
      premiumType: null,
      showFormTitle: false,
    };
    let fn;
    if (null == premiumTrialOfferPremiumType) {
      fn = (additionalPlans) => {
        let tmp = 0 === additionalPlans.additionalPlans.length;
        ({ numPremiumGuild, interval, premiumTier } = additionalPlans);
        if (tmp) {
          tmp = !additionalPlans.isDeprecated;
        }
        if (tmp) {
          tmp = 0 === numPremiumGuild;
        }
        if (tmp) {
          tmp = interval === constants.MONTH;
        }
        if (tmp) {
          tmp = premiumTier !== closure_1_5.TIER_1;
        }
        return tmp;
      };
    }
    obj.predicate = fn;
    let fn2;
    if (null == premiumTrialOfferPremiumType) {
      fn2 = (premiumTier) => premiumTier.premiumTier === closure_1_5.TIER_2;
    }
    obj.initialSelectedCriteria = fn2;
    obj.premiumType = premiumTrialOfferPremiumType;
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
  let interval;
  if (premiumTrialOffer != null) {
    let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      interval = subscriptionTrial.interval;
    }
  }
  const items1 = [interval, ,];
  let intervalCount;
  if (premiumTrialOffer != null) {
    let subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial2 != null) {
      intervalCount = subscriptionTrial2.intervalCount;
    }
  }
  items1[1] = intervalCount;
  items1[2] = premiumTrialOfferPremiumType;
  obj.buttonText = noop.useMemo(() => {
    if (null == premiumTrialOfferPremiumType) {
      const intl = util.intl;
      let stringResult = intl.string(util.t["8x0jKT"]);
    } else {
      let obj = PremiumUtils;
      let interval;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = tmp3.subscriptionTrial;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
      }
      obj = { intervalType: interval, intervalCount: null };
      let intervalCount;
      if (premiumTrialOffer != null) {
        const subscriptionTrial2 = tmp3.subscriptionTrial;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
      }
      obj.intervalCount = intervalCount;
      stringResult = obj.formatTrialCtaIntervalDuration(obj);
    }
    return stringResult;
  }, items1);
  return obj;
}

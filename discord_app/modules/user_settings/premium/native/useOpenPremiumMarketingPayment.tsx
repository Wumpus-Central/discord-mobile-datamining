// === Module 13299: useOpenPremiumMarketingPayment ===

// Module 13299 (useOpenPremiumMarketingPayment)
import util from "util" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6928 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1379);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
let closure_6 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let formatTrialCtaIntervalDuration = analyticsLocations;
  let result1 = dependencyMap;
  const cResult = analyticsLocations(576).c(10);
  analyticsLocations = premiumTrialOfferPremiumType(6657)(arg0).analyticsLocations;
  let obj = analyticsLocations(576);
  const premiumTrialOffer = analyticsLocations(6956).usePremiumTrialOffer();
  const obj2 = analyticsLocations(6956);
  premiumTrialOfferPremiumType = analyticsLocations(6955).usePremiumTrialOfferPremiumType();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === premiumTrialOfferPremiumType) {
      let tmp5 = cResult[2];
    }
    if (null != premiumTrialOfferPremiumType) {
      let interval;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
      }
      let intervalCount;
      if (premiumTrialOffer != null) {
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
      }
      if (cResult[4] === interval) {
      }
      const result = formatTrialCtaIntervalDuration(4528);
      formatTrialCtaIntervalDuration = result.formatTrialCtaIntervalDuration;
      const obj4 = { intervalType: interval, intervalCount };
      result1 = formatTrialCtaIntervalDuration(obj4);
      cResult[4] = interval;
      cResult[5] = intervalCount;
      cResult[6] = result1;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = formatTrialCtaIntervalDuration(1126).intl;
        const stringResult = intl.string(formatTrialCtaIntervalDuration(1126).t["8x0jKT"]);
        cResult[3] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[7] === tmp8) {
        if (cResult[8] === tmp5) {
          let tmp15 = cResult[9];
        }
        return tmp15;
      }
      const obj5 = { openPayment: tmp5, buttonText: tmp8 };
      cResult[7] = tmp8;
      cResult[8] = tmp5;
      cResult[9] = obj5;
      tmp15 = obj5;
    }
  }
  let fn = function n() {
    const obj = { analyticsLocation, analyticsLocations, predicate: null, initialSelectedCriteria: null, premiumType: null, showFormTitle: false };
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
  };
  cResult[0] = analyticsLocations;
  cResult[1] = premiumTrialOfferPremiumType;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function useOpenPremiumMarketingPayment(arg0) {
  const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[5])(arg0).analyticsLocations;
  premiumTrialOffer = analyticsLocations(premiumTrialOfferPremiumType[6]).usePremiumTrialOffer();
  let obj = analyticsLocations(premiumTrialOfferPremiumType[6]);
  premiumTrialOfferPremiumType = analyticsLocations(premiumTrialOfferPremiumType[7]).usePremiumTrialOfferPremiumType();
  const obj3 = { openPayment: null, buttonText: null };
  const items = [analyticsLocations, premiumTrialOfferPremiumType];
  obj3.openPayment = noop.useCallback(() => {
    const obj = { analyticsLocation, analyticsLocations, predicate: null, initialSelectedCriteria: null, premiumType: null, showFormTitle: false };
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
  const items1 = [interval, , ];
  let intervalCount;
  if (premiumTrialOffer != null) {
    let subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial2 != null) {
      intervalCount = subscriptionTrial2.intervalCount;
    }
  }
  items1[1] = intervalCount;
  items1[2] = premiumTrialOfferPremiumType;
  obj3.buttonText = noop.useMemo(() => {
    if (null == premiumTrialOfferPremiumType) {
      const intl = util.intl;
      let stringResult = intl.string(util.t["8x0jKT"]);
    } else {
      let interval;
      if (premiumTrialOffer != null) {
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
      }
      const obj2 = { intervalType: interval, intervalCount: null };
      let intervalCount;
      if (premiumTrialOffer != null) {
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
      }
      obj2.intervalCount = intervalCount;
      stringResult = PremiumUtils.formatTrialCtaIntervalDuration(obj2);
    }
    return stringResult;
  }, items1);
  return obj3;
});
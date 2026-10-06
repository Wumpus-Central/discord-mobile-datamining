// discord_app/modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx
import intl2 from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_4;
let hasOwnProperty;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
let closure_6 = {
  page: AnalyticsPages.USER_SETTINGS,
  section: AnalyticsSections.SETTINGS_PREMIUM,
  objectType: AnalyticsObjectTypes.BUY,
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocation;
      let analyticsLocations;
      let premiumTrialOfferPremiumType;
      let tmp = analyticsLocations;
      let obj = analyticsLocations(576);
      const cResult = obj.c(10);
      analyticsLocations = premiumTrialOfferPremiumType(6664)(arg0).analyticsLocations;
      const obj2 = analyticsLocations(6969);
      const premiumTrialOffer = obj2.usePremiumTrialOffer();
      const obj3 = analyticsLocations(6968);
      premiumTrialOfferPremiumType = obj3.usePremiumTrialOfferPremiumType();
      if (cResult[0] === analyticsLocations) {
        let tmp6;
        let tmp9;
        if (cResult[1] === premiumTrialOfferPremiumType) {
          tmp6 = cResult[2];
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
            let tmp13;
            if (cResult[5] === intervalCount) {
              tmp13 = cResult[6];
            }
            tmp9 = tmp13;
          }
          const obj4 = { intervalType: interval, intervalCount };
          const tmpResult = tmp(4534);
          const result = tmpResult.formatTrialCtaIntervalDuration(obj4);
          cResult[4] = interval;
          cResult[5] = intervalCount;
          cResult[6] = result;
          tmp13 = result;
        } else {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["8x0jKT"]);
            cResult[3] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[3];
          }
        }
        if (cResult[7] === tmp9) {
          let tmp15;
          if (cResult[8] === tmp6) {
            tmp15 = cResult[9];
          }
          return tmp15;
        }
        const obj5 = { openPayment: tmp6, buttonText: tmp9 };
        cResult[7] = tmp9;
        cResult[8] = tmp6;
        cResult[9] = obj5;
        tmp15 = obj5;
      }
      let fn = function n() {
        let fn;
        let fn2;
        const obj = {
          analyticsLocation,
          analyticsLocations,
          predicate: fn,
          initialSelectedCriteria: fn2,
          premiumType: premiumTrialOfferPremiumType,
          showFormTitle: false,
        };
        fn = undefined;
        let tmp = openPremiumPlanSelectionActionSheetDefault;
        if (null == premiumTrialOfferPremiumType) {
          fn = (additionalPlans) => {
            let interval;
            let numPremiumGuild;
            let premiumTier;
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
        fn2 = undefined;
        if (null == premiumTrialOfferPremiumType) {
          fn2 = (premiumTier) => premiumTier.premiumTier === closure_1_5.TIER_2;
        }
        tmp(obj);
      };
      cResult[0] = analyticsLocations;
      cResult[1] = premiumTrialOfferPremiumType;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : function useOpenPremiumMarketingPayment(arg0) {
      let analyticsLocation;
      let items;
      let items1;
      let premiumTrialOffer;
      let premiumTrialOfferPremiumType;
      let useMemo;
      const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[5])(arg0).analyticsLocations;
      let obj = analyticsLocations(premiumTrialOfferPremiumType[6]);
      premiumTrialOffer = obj.usePremiumTrialOffer();
      const obj2 = analyticsLocations(premiumTrialOfferPremiumType[7]);
      premiumTrialOfferPremiumType = obj2.usePremiumTrialOfferPremiumType();
      const obj3 = {
        openPayment: react.useCallback(() => {
          let fn;
          let fn2;
          const obj = {
            analyticsLocation,
            analyticsLocations,
            predicate: fn,
            initialSelectedCriteria: fn2,
            premiumType: premiumTrialOfferPremiumType,
            showFormTitle: false,
          };
          fn = undefined;
          let tmp = openPremiumPlanSelectionActionSheetDefault;
          if (null == premiumTrialOfferPremiumType) {
            fn = (additionalPlans) => {
              let interval;
              let numPremiumGuild;
              let premiumTier;
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
          fn2 = undefined;
          if (null == premiumTrialOfferPremiumType) {
            fn2 = (premiumTier) => premiumTier.premiumTier === closure_1_5.TIER_2;
          }
          tmp(obj);
        }, items),
        buttonText: useMemo(() => {
          let intervalCount;
          let stringResult;
          if (null == premiumTrialOfferPremiumType) {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t["8x0jKT"]);
          } else {
            let interval;
            const formatTrialCtaIntervalDuration = PremiumUtils.formatTrialCtaIntervalDuration;
            PremiumUtils;
            if (premiumTrialOffer != null) {
              const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
              if (subscriptionTrial != null) {
                interval = subscriptionTrial.interval;
              }
            }
            const obj = { intervalType: interval, intervalCount };
            intervalCount = undefined;
            if (premiumTrialOffer != null) {
              const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
              if (subscriptionTrial2 != null) {
                intervalCount = subscriptionTrial2.intervalCount;
              }
            }
            stringResult = formatTrialCtaIntervalDuration(obj);
          }
          return stringResult;
        }, items1),
      };
      items = [analyticsLocations, premiumTrialOfferPremiumType];
      let interval;
      useMemo = react.useMemo;
      if (premiumTrialOffer != null) {
        let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
      }
      items1 = [interval, ,];
      let intervalCount;
      if (premiumTrialOffer != null) {
        let subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
      }
      items1[1] = intervalCount;
      items1[2] = premiumTrialOfferPremiumType;
      return obj3;
    };
let result = size.fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default tmp4;

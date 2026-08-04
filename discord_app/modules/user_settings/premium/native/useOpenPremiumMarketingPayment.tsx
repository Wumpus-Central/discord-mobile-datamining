// discord_app/modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx
import noop from "noop";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let c4;
let c5;
const require = arg1;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = ME);
({ SubscriptionIntervalTypes: c4, PremiumTypes: c5 } = GuildFeatures);
let closure_6 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default function useOpenPremiumMarketingPayment(arg0) {
  const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[3])(arg0).analyticsLocations;
  let obj = analyticsLocations(premiumTrialOfferPremiumType[4]);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  premiumTrialOfferPremiumType = analyticsLocations(premiumTrialOfferPremiumType[5]).usePremiumTrialOfferPremiumType();
  obj = {
    openPayment: React.useCallback(() => {
      const obj = { analyticsLocation: outer1_6, analyticsLocations, predicate: null, initialSelectedCriteria: null, premiumType: null, showFormTitle: false };
      let fn;
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
            tmp = premiumTier !== closure_5.TIER_1;
          }
          return tmp;
        };
      }
      obj[2] = fn;
      let fn2;
      if (null == premiumTrialOfferPremiumType) {
        fn2 = (premiumTier) => premiumTier.premiumTier === closure_5.TIER_2;
      }
      obj[3] = fn2;
      obj[4] = premiumTrialOfferPremiumType;
      premiumTrialOffer(premiumTrialOfferPremiumType[6])(obj);
    }, items),
    buttonText: null
  };
  items = [analyticsLocations, premiumTrialOfferPremiumType];
  let interval;
  if (premiumTrialOffer != null) {
    let subscription_trial = premiumTrialOffer.subscription_trial;
    if (subscription_trial != null) {
      interval = subscription_trial.interval;
    }
  }
  const items1 = [interval, , ];
  let interval_count;
  if (premiumTrialOffer != null) {
    let subscription_trial2 = premiumTrialOffer.subscription_trial;
    if (subscription_trial2 != null) {
      interval_count = subscription_trial2.interval_count;
    }
  }
  items1[1] = interval_count;
  items1[2] = premiumTrialOfferPremiumType;
  obj[1] = React.useMemo(() => {
    if (null == premiumTrialOfferPremiumType) {
      const intl = analyticsLocations(premiumTrialOfferPremiumType[7]).intl;
      let stringResult = intl.string(analyticsLocations(premiumTrialOfferPremiumType[7]).t["8x0jKT"]);
    } else {
      let obj = analyticsLocations(premiumTrialOfferPremiumType[8]);
      let interval;
      if (premiumTrialOffer != null) {
        const subscription_trial = tmp3.subscription_trial;
        if (subscription_trial != null) {
          interval = subscription_trial.interval;
        }
      }
      obj = { intervalType: null, intervalCount: null };
      obj[0] = interval;
      let interval_count;
      if (premiumTrialOffer != null) {
        const subscription_trial2 = tmp3.subscription_trial;
        if (subscription_trial2 != null) {
          interval_count = subscription_trial2.interval_count;
        }
      }
      obj[1] = interval_count;
      stringResult = obj.formatTrialCtaIntervalDuration(obj);
    }
    return stringResult;
  }, items1);
  return obj;
};
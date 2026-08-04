import { UserSettingsSections } from "ME";

let result = require("module_4490").fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let guildId;
  let navigation;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let require;
  let showCurrentPlan;
  ({ predicate: require, navigation, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isBoostPurchaseFlow.allowYearlyBundles;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } = isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    const result = outer1_0(outer1_2[1]).shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2);
    let tmp2 = !result;
    if (!result) {
      let flag;
      if (callback != null) {
        flag = callback(isDeprecated);
      }
      if (flag == null) {
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
  const PREMIUM_PLAN_SELECT = UserSettingsSections.PREMIUM_PLAN_SELECT;
  if (null != navigation) {
    let obj = { predicate: null, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, isBoostPurchaseFlow: null, planId: null, applicationId: null, guildId: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj[0] = wrappedPredicate;
    obj[1] = analyticsLocation;
    obj[2] = analyticsLocations;
    obj[3] = showCurrentPlan;
    obj[4] = flag;
    obj[5] = planId;
    obj[6] = applicationId;
    obj[7] = guildId;
    obj[8] = onPaymentSuccess;
    obj[9] = onPaymentDismiss;
    navigation.push(PREMIUM_PLAN_SELECT, obj);
  } else {
    obj = { initialRoute: null, analyticsLocation: null, analyticsLocations: null, predicate: null, showCurrentPlan: null, isBoostPurchaseFlow: null, planId: null, applicationId: null, guildId: null, onBack: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj[0] = PREMIUM_PLAN_SELECT;
    obj[1] = analyticsLocation;
    obj[2] = analyticsLocations;
    obj[3] = wrappedPredicate;
    obj[4] = showCurrentPlan;
    obj[5] = flag;
    obj[6] = planId;
    obj[7] = applicationId;
    obj[8] = guildId;
    obj[9] = tmp;
    obj[10] = onPaymentSuccess;
    obj[11] = onPaymentDismiss;
    const obj3 = flag2(4490);
    obj3.pushLazy(require(1959) /* asyncRequireImpl */(6783, dependencyMap.paths), obj, require(6783) /* PremiumModal */.PREMIUM_KEY);
    const tmp7 = require(1959) /* asyncRequireImpl */(6783, dependencyMap.paths);
  }
  let result = require(5922) /* getSanitizedRestrictedGuilds */.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};
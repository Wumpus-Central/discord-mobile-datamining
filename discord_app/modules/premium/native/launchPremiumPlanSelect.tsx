// discord_app/modules/premium/native/launchPremiumPlanSelect.tsx
import Constants from "../../../Constants.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils.tsx";
import PremiumModal from "../../../components_native/premium/PremiumModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
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
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } =
    isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    const result = PremiumBundledPlansUtils.shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2);
    let tmp2 = !result;
    if (!result) {
      let flag;
      if (closure_1_0 != null) {
        flag = closure_1_0(isDeprecated);
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
    let obj = {
      predicate: wrappedPredicate,
      analyticsLocation,
      analyticsLocations,
      showCurrentPlan,
      isBoostPurchaseFlow: flag,
      planId,
      applicationId,
      guildId,
      onPaymentSuccess,
      onPaymentDismiss,
    };
    navigation.push(PREMIUM_PLAN_SELECT, obj);
  } else {
    obj = {
      initialRoute: PREMIUM_PLAN_SELECT,
      analyticsLocation,
      analyticsLocations,
      predicate: wrappedPredicate,
      showCurrentPlan,
      isBoostPurchaseFlow: flag,
      planId,
      applicationId,
      guildId,
      onBack: tmp,
      onPaymentSuccess,
      onPaymentDismiss,
    };
    const obj3 = flag2(4763);
    obj3.pushLazy(asyncRequireImpl(7412, dependencyMap.paths), obj, PremiumModal.PREMIUM_KEY);
    const tmp7 = asyncRequireImpl(7412, dependencyMap.paths);
  }
  let result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};

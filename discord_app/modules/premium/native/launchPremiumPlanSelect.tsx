// discord_app/modules/premium/native/launchPremiumPlanSelect.tsx
import Constants from "../../../Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils.tsx";
import PremiumModal from "../../../components_native/premium/PremiumModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/premium/native/launchPremiumPlanSelect.tsx");

export const launchPremiumPlanSelect = function launchPremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let guildId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
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
  ({ analyticsLocation, analyticsLocations, planId, applicationId, guildId, onPaymentSuccess, onPaymentDismiss } =
    isBoostPurchaseFlow);
  function wrappedPredicate(isDeprecated) {
    const obj = PremiumBundledPlansUtils;
    const result = obj.shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2);
    let tmp2 = !result;
    if (tmp2) {
      let flag;
      if (require != null) {
        flag = require(isDeprecated);
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
    const pushLazy = flag2(5093).pushLazy;
    const obj3 = {
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
    flag2(5093);
    const tmp8 = asyncRequire(6918, dependencyMap.paths);
    pushLazy(tmp8, obj3, PremiumModal.PREMIUM_KEY);
  }
  const obj2 = UserSettingsUtils;
  let result = obj2.trackUserSettingsPaneViewed({ destinationPane: PREMIUM_PLAN_SELECT });
};

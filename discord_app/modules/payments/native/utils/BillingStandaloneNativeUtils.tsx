// === Module 7010: emitMWRCSentryErrorOnFailure ===

// Module 7010 (emitMWRCSentryErrorOnFailure)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ME from "ME" /* 676 */;
import CustomCheckoutFlow2 from "CustomCheckoutFlow" /* 4362 */;
import MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG from "MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG" /* 7011 */;

function emitMWRCSentryErrorOnFailure(arg0, source, load_id) {
  [tmp4, tmp5] = arg0;
  let obj = { destination_url: tmp5, load_id };
  try {
    const _HermesInternal = HermesInternal;
    logger.error("Failed to open mobile web popout to " + tmp5 + ", error response: ", tmp4);
    obj1 = MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG;
    const _Error = Error;
    error = new Error("Mobile web redirect checkout mobile app to web popout failed");
    obj = { extra: null };
    obj = { failure_response: null };
    obj[0] = tmp4;
    const merged = Object.assign(obj);
    obj[0] = obj;
    const result = obj1.captureMobileWebRedirectCheckoutSentryError(error, source, obj);
  } catch (err) {
    const _Error2 = Error;
    const error1 = new Error("Mobile web redirect checkout mobile app to web popout failed");
    obj1 = { extra: null };
    obj1[0] = tmp3;
    const result1 = MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG.captureMobileWebRedirectCheckoutSentryError(error1, tmp2, obj1);
    const obj5 = MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG;
  }
}
let CustomCheckoutFlow = CustomCheckoutFlow2.CustomCheckoutFlow;
const Routes = ME.Routes;
let closure_5 = new timestampDefault("BillingStandaloneNativeUtils");
const tmp2 = new timestampDefault("BillingStandaloneNativeUtils");
let result = set.fileFinishedImporting("modules/payments/native/utils/BillingStandaloneNativeUtils.tsx");

export const goToStandalonePremiumCheckoutFromMobileApp = function goToStandalonePremiumCheckoutFromMobileApp(premium_nitro_marketing_page, arg1, arg2, arg3) {
  const _require = premium_nitro_marketing_page;
  closure_1 = arg1;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  let obj = _require(7012);
  obj = {};
  const obj2 = _require(1625);
  const tmp = _require;
  const merged = Object.assign(arg1);
  if (isMetaQuestResult) {
    obj.flowType = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    let tmp5 = obj;
  } else {
    obj.deepLinkType = tmp(691).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
    tmp5 = obj;
  }
  return obj.goToStandalonePremiumCheckout(tmp5, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    lib(4094).openURLExternally(searchParams.href);
    dependencyMap(body, searchParams);
  }, () => {
    const items = [...arguments];
    closure_1_6(items, closure_0, lib.loadId);
    callback(...items);
  });
};
export const goToStandaloneNitroManagementFromMobileApp = function goToStandaloneNitroManagementFromMobileApp(premium_external_management, loadId, arg2, arg3) {
  const _require = premium_external_management;
  loadId = loadId.loadId;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  const obj = _require(7012);
  const tmp = _require;
  if (obj2.isMetaQuest()) {
    let result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT, loadId);
  } else {
    result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(tmp(691).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT, loadId);
  }
  return obj.goToBillingStandalonePageWithHandoff(result, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    loadId(4094).openURLExternally(searchParams.href);
    dependencyMap(body, searchParams);
  }, () => {
    const items = [...arguments];
    closure_1_6(items, closure_0, loadId);
    callback(...items);
  });
};
export const goToStandaloneGuildBoostCheckoutFromMobileApp = function goToStandaloneGuildBoostCheckoutFromMobileApp(closure_0, closure_1, newAnalyticsLoadId, arg3, arg4) {
  const _require = closure_0;
  closure_1 = newAnalyticsLoadId;
  dependencyMap = arg3;
  CustomCheckoutFlow = arg4;
  let prop;
  if (!obj.isMetaQuest()) {
    prop = tmp(691).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
  }
  let tmpResult = tmp(1625);
  let prop1;
  if (tmpResult.isMetaQuest()) {
    prop1 = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  tmpResult = tmp(7012);
  return tmpResult.goToBillingStandalonePageWithHandoff(Routes.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(closure_1, prop, newAnalyticsLoadId, prop1), (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    newAnalyticsLoadId(4094).openURLExternally(searchParams.href);
    dependencyMap(body, searchParams);
  }, () => {
    const items = [...arguments];
    closure_1_6(items, closure_0, closure_1);
    callback(...items);
  });
};
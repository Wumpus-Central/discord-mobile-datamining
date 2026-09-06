// discord_app/modules/payments/native/utils/BillingStandaloneNativeUtils.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import Constants from "../../../../Constants.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import PaymentConstants from "../../PaymentConstants.tsx";
import MobileWebRedirectCheckoutUtils from "../../utils/MobileWebRedirectCheckoutUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function emitMWRCSentryErrorOnFailure(items, source, loadId) {
  [tmp4, tmp5] = items;
  let obj = { destination_url: tmp5, load_id: loadId };
  try {
    const _HermesInternal = HermesInternal;
    logger.error("Failed to open mobile web popout to " + tmp5 + ", error response: ", tmp4);
    let obj1 = MobileWebRedirectCheckoutUtils;
    const _Error = Error;
    const error = new Error("Mobile web redirect checkout mobile app to web popout failed");
    obj = { extra: null };
    obj = { failure_response: tmp4 };
    const merged = Object.assign(obj);
    obj.extra = obj;
    const result = obj1.captureMobileWebRedirectCheckoutSentryError(error, source, obj);
  } catch (err) {
    const _Error2 = Error;
    const error1 = new Error("Mobile web redirect checkout mobile app to web popout failed");
    obj1 = { extra: tmp3 };
    const result1 = MobileWebRedirectCheckoutUtils.captureMobileWebRedirectCheckoutSentryError(error1, tmp2, obj1);
  }
}
let CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
const Routes = Constants.Routes;
const logger = new LoggerDefault("BillingStandaloneNativeUtils");
let result = size.fileFinishedImporting("modules/payments/native/utils/BillingStandaloneNativeUtils.tsx");

export const goToStandalonePremiumCheckoutFromMobileApp = function goToStandalonePremiumCheckoutFromMobileApp(
  premium_nitro_marketing_page,
  arg1,
  arg2,
  arg3,
) {
  _require = premium_nitro_marketing_page;
  const loadId = arg1;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  require("BillingStandaloneUtils");
  const obj = {};
  const obj2 = require("MetaQuestUtils");
  const tmp = _require;
  const merged = Object.assign(arg1);
  if (isMetaQuestResult) {
    obj.flowType = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    let tmp5 = obj;
  } else {
    obj.deepLinkType = tmp(1093).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
    tmp5 = obj;
  }
  return obj.goToStandalonePremiumCheckout(
    tmp5,
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      LinkingDefault.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, closure_0, loadId.loadId);
      closure_3(...items);
    },
  );
};
export const goToStandaloneNitroManagementFromMobileApp = function goToStandaloneNitroManagementFromMobileApp(
  premium_external_management,
  loadId,
  arg2,
  arg3,
) {
  _require = premium_external_management;
  loadId = loadId.loadId;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  const obj = require("BillingStandaloneUtils");
  const tmp = _require;
  if (obj2.isMetaQuest()) {
    let result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(
      CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT,
      loadId,
    );
  } else {
    result = obj3.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(
      tmp(1093).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT,
      loadId,
    );
  }
  return obj.goToBillingStandalonePageWithHandoff(
    result,
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      LinkingDefault.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, closure_0, loadId);
      closure_3(...items);
    },
  );
};
export const goToStandaloneGuildBoostCheckoutFromMobileApp = function goToStandaloneGuildBoostCheckoutFromMobileApp(
  arg0,
  arg1,
  newAnalyticsLoadId,
  arg3,
  arg4,
) {
  _require = arg0;
  closure_1 = newAnalyticsLoadId;
  dependencyMap = arg3;
  CustomCheckoutFlow = arg4;
  let prop;
  if (!obj.isMetaQuest()) {
    prop = tmp(1093).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
  }
  let tmpResult = tmp(1608);
  let prop1;
  if (tmpResult.isMetaQuest()) {
    prop1 = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  tmpResult = tmp(7407);
  return tmpResult.goToBillingStandalonePageWithHandoff(
    Routes.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(arg1, prop, newAnalyticsLoadId, prop1),
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      LinkingDefault.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, closure_0, closure_1);
      closure_3(...items);
    },
  );
};

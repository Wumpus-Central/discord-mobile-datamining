// discord_app/modules/payments/native/utils/BillingStandaloneNativeUtils.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import Constants from "../../../../Constants.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import PaymentConstants from "../../PaymentConstants.tsx";
import MobileWebRedirectCheckoutUtils from "../../utils/MobileWebRedirectCheckoutUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function emitMWRCSentryErrorOnFailure(items, source, loadId) {
  let obj3;
  let tmp;
  let tmp2;
  [tmp, tmp2] = items;
  const obj = { destination_url: tmp2, load_id: loadId };
  try {
    const _HermesInternal = HermesInternal;
    logger.error("Failed to open mobile web popout to " + tmp2 + ", error response: ", tmp);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const captureMobileWebRedirectCheckoutSentryError =
      MobileWebRedirectCheckoutUtils.captureMobileWebRedirectCheckoutSentryError;
    MobileWebRedirectCheckoutUtils;
    const error = new Error("Mobile web redirect checkout mobile app to web popout failed");
    const obj2 = { extra: obj3 };
    obj3 = { failure_response: tmp };
    const merged = Object.assign(obj);
    const result = captureMobileWebRedirectCheckoutSentryError(error, source, obj2);
  } catch (err) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const captureMobileWebRedirectCheckoutSentryError2 =
      MobileWebRedirectCheckoutUtils.captureMobileWebRedirectCheckoutSentryError;
    MobileWebRedirectCheckoutUtils;
    const error1 = new Error("Mobile web redirect checkout mobile app to web popout failed");
    const obj4 = { extra: obj };
    const result1 = captureMobileWebRedirectCheckoutSentryError2(error1, source, obj4);
  }
}
let CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
const Routes = Constants.Routes;
const tmp2 = new LoggerDefault("BillingStandaloneNativeUtils");
const logger = tmp2;
let result = size.fileFinishedImporting("modules/payments/native/utils/BillingStandaloneNativeUtils.tsx");

export const goToStandalonePremiumCheckoutFromMobileApp = function goToStandalonePremiumCheckoutFromMobileApp(
  premium_plan_selection_action_sheet,
  arg1,
  arg2,
  arg3,
) {
  let closure_2;
  let closure_3;
  let tmp6;
  _require = premium_plan_selection_action_sheet;
  const loadId = arg1;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  const goToStandalonePremiumCheckout = require("BillingStandaloneUtils").goToStandalonePremiumCheckout;
  const tmp3 = require("BillingStandaloneUtils");
  let obj = require("MetaQuestUtils");
  const obj2 = {};
  const isMetaQuestResult = obj.isMetaQuest();
  const merged = Object.assign(arg1);
  const tmp = _require;
  if (isMetaQuestResult) {
    obj2.flowType = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    tmp6 = obj2;
  } else {
    obj2.deepLinkType = tmp(1105).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
    tmp6 = obj2;
  }
  return goToStandalonePremiumCheckout(
    tmp6,
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      const obj = LinkingDefault;
      obj.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, premium_plan_selection_action_sheet, loadId.loadId);
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
  let closure_2;
  let closure_3;
  let result;
  _require = premium_external_management;
  loadId = loadId.loadId;
  dependencyMap = arg2;
  CustomCheckoutFlow = arg3;
  const goToBillingStandalonePageWithHandoff = require("BillingStandaloneUtils").goToBillingStandalonePageWithHandoff;
  const tmp3 = require("BillingStandaloneUtils");
  let obj = require("MetaQuestUtils");
  const tmp = _require;
  if (obj.isMetaQuest()) {
    result = Routes.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(
      CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT,
      loadId,
    );
  } else {
    result = Routes.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(
      tmp(1105).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT,
      loadId,
    );
  }
  return goToBillingStandalonePageWithHandoff(
    result,
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      const obj = LinkingDefault;
      obj.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, premium_external_management, loadId);
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
  let closure_0;
  let closure_2;
  let closure_3;
  _require = arg0;
  let closure_1 = newAnalyticsLoadId;
  dependencyMap = arg3;
  CustomCheckoutFlow = arg4;
  let obj = require("MetaQuestUtils");
  let prop;
  if (!obj.isMetaQuest()) {
    prop = tmp(1105).LinkingTypes.MOBILE_WEB_REDIRECT_CHECKOUT;
  }
  let prop1;
  const tmpResult = require("MetaQuestUtils");
  if (tmpResult.isMetaQuest()) {
    prop1 = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  const tmpResult2 = require("BillingStandaloneUtils");
  return tmpResult2.goToBillingStandalonePageWithHandoff(
    Routes.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(arg1, prop, newAnalyticsLoadId, prop1),
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      const obj = LinkingDefault;
      obj.openURLExternally(searchParams.href);
      closure_2(body, searchParams);
    },
    () => {
      const items = [...arguments];
      emitMWRCSentryErrorOnFailure(items, closure_0, newAnalyticsLoadId);
      closure_3(...items);
    },
  );
};
